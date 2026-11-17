import { applyAction, emptyProgress, mergeBackup, validateProgress, type Action, type Progress } from './model';
const DATABASE = 'neet-pg-daily-v1';
const LOCAL_KEY = 'neet-pg-progress-v1';
export type StorageMode = 'indexeddb' | 'local' | 'memory';
function requestValue<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => { request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); });
}
async function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) return reject(new Error('IndexedDB unavailable'));
    let expired = false;
    const timeout = setTimeout(() => { expired = true; reject(new Error('Storage initialization timed out')); }, 3000);
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () => { if (!request.result.objectStoreNames.contains('profile')) request.result.createObjectStore('profile'); };
    request.onerror = () => { clearTimeout(timeout); reject(request.error); };
    request.onblocked = () => { clearTimeout(timeout); reject(new Error('Storage upgrade blocked by another tab')); };
    request.onsuccess = () => {
      clearTimeout(timeout);
      if (expired) request.result.close(); else resolve(request.result);
    };
  });
}
export class ProgressStore {
  mode: StorageMode = 'memory';
  warning: string | null = null;
  recoveryRaw: string | null = null;
  private db: IDBDatabase | null = null;
  private value: Progress = emptyProgress();
  private queue: Promise<unknown> = Promise.resolve();
  private channel: BroadcastChannel | null = null;
  private listeners = new Set<() => void>();
  private initialized: Promise<Progress> | null = null;
  get snapshot() { return this.value; }
  subscribe(listener: () => void) { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; }
  private notify() { this.listeners.forEach(listener => listener()); }
  initialize(): Promise<Progress> { return this.initialized ??= this.load(); }
  private async load(): Promise<Progress> {
    let raw: unknown;
    try {
      this.db = await openDatabase();
      this.db.onversionchange = () => { this.db?.close(); this.db = null; this.mode = 'memory'; this.warning = 'Storage changed in another tab. Reload to reconnect; export any current work first.'; this.notify(); };
      raw = await requestValue(this.db.transaction('profile', 'readonly').objectStore('profile').get('main'));
      this.mode = 'indexeddb';
    } catch {
      this.db = null;
      try {
        const probe = LOCAL_KEY + '-probe'; localStorage.setItem(probe, '1'); localStorage.removeItem(probe);
        const text = localStorage.getItem(LOCAL_KEY); raw = text === null ? undefined : JSON.parse(text);
        this.mode = 'local'; this.warning = 'IndexedDB is unavailable. Progress is saved in browser local storage instead; export a backup regularly.';
      } catch (error) {
        this.mode = 'memory'; this.warning = 'Browser storage is unavailable or damaged. Progress is temporary in this tab. Export a backup before closing.';
        try { this.recoveryRaw = localStorage.getItem(LOCAL_KEY); } catch { /* no access */ }
      }
    }
    try {
      this.value = raw === undefined ? emptyProgress() : validateProgress(raw);
      // A quota fallback may hold a newer durable record than IndexedDB.
      if (this.mode === 'indexeddb') {
        try {
          const fallback = localStorage.getItem(LOCAL_KEY);
          if (fallback) {
            const candidate = validateProgress(JSON.parse(fallback));
            if (candidate.revision > this.value.revision) {
              this.value = candidate;
              try { await this.put(candidate); }
              catch { this.mode='local'; this.warning='Your newer progress is saved in local storage. IndexedDB is still unable to save; export a backup in Settings.'; }
            }
          }
        } catch { /* a valid primary record is retained */ }
      }
    } catch {
      this.recoveryRaw = JSON.stringify(raw, null, 2);
      this.value = emptyProgress(); this.mode = 'memory';
      this.warning = 'Saved progress is inconsistent and has been preserved untouched. This session is temporary. Download the original data in Settings to recover it.';
    }
    try {
      this.channel = new BroadcastChannel('neet-pg-sync');
      this.channel.onmessage = () => { void this.refresh(); };
    } catch { /* storage events remain available for local fallback */ }
    window.addEventListener('storage', event => { if (event.key === LOCAL_KEY) void this.refresh(); });
    return this.value;
  }
  async refresh() {
    try {
      const raw = this.mode === 'indexeddb' && this.db
        ? await requestValue(this.db.transaction('profile','readonly').objectStore('profile').get('main'))
        : this.mode === 'local' ? JSON.parse(localStorage.getItem(LOCAL_KEY) || 'null') : null;
      if (raw) { const next = validateProgress(raw); if (next.revision > this.value.revision) { this.value = next; this.notify(); } }
    } catch { this.warning = 'Progress could not be synchronized. Your current answers remain visible; export a backup and reload.'; this.notify(); }
  }
  dispatch(action: Action, now = new Date()): Promise<Progress> {
    const operation = this.queue.then(async () => {
      let next: Progress;
      if (this.mode === 'indexeddb' && this.db) {
        let prepared:Progress|undefined;
        try {
          next = await new Promise<Progress>((resolve, reject) => {
            const transaction = this.db!.transaction('profile', 'readwrite');
            const objectStore = transaction.objectStore('profile');
            const request = objectStore.get('main'); let result: Progress; let error: unknown;
            request.onsuccess = () => {
              try {
                const latest = request.result === undefined ? this.value : validateProgress(request.result);
                result = applyAction(latest, action, now); prepared=result; objectStore.put(result, 'main');
              } catch (cause) { error = cause; transaction.abort(); }
            };
            transaction.oncomplete = () => resolve(result);
            transaction.onerror = transaction.onabort = () => reject(error || transaction.error || new Error('Storage write failed'));
          });
        } catch (error) {
          if (error instanceof Error && /Select|Choose|Future|Question|Invalid|Unsupported|Saved|Inconsistent/.test(error.message)) throw error;
          // Preserve in-memory progress and use a durable fallback where possible.
          next = prepared ?? applyAction(this.value, action, now); this.saveFallback(next);
        }
      } else if (this.mode === 'local') {
        const update = async () => {
          let latest = this.value;
          try { const raw = localStorage.getItem(LOCAL_KEY); if (raw) latest = validateProgress(JSON.parse(raw)); }
          catch { this.mode = 'memory'; this.warning = 'Local progress became unreadable. The original has been preserved; export this session before closing.'; }
          const result = applyAction(latest, action, now);
          if (this.mode === 'local') this.saveFallback(result);
          return result;
        };
        next = navigator.locks ? await navigator.locks.request('neet-pg-local-write', update) : await update();
      } else next = applyAction(this.value, action, now);
      this.value = next; this.notify(); this.channel?.postMessage({ revision: next.revision });
      return next;
    });
    this.queue = operation.catch(() => undefined);
    return operation;
  }
  private saveFallback(next: Progress) {
    try { localStorage.setItem(LOCAL_KEY, JSON.stringify(next)); this.mode = 'local'; this.warning = 'Using browser local storage because IndexedDB could not save. Export a backup in Settings.'; }
    catch { this.mode = 'memory'; this.warning = 'Browser storage could not save this change. Your progress is temporary; export it before closing this tab.'; }
  }
  private put(next: Progress): Promise<void> {
    if (this.mode === 'memory') throw new Error('Storage is unavailable. Restore after enabling browser storage.');
    if (this.mode === 'local') { localStorage.setItem(LOCAL_KEY, JSON.stringify(next)); return Promise.resolve(); }
    return new Promise((resolve,reject) => {
      const tx = this.db!.transaction('profile','readwrite'); tx.objectStore('profile').put(next,'main');
      tx.oncomplete = () => resolve(); tx.onerror = tx.onabort = () => reject(tx.error);
    });
  }
  importBackup(raw: unknown): Promise<Progress> {
    const operation = this.queue.then(async () => {
      validateProgress(raw);
      let next:Progress;
      if(this.mode==='indexeddb'&&this.db) {
        next=await new Promise<Progress>((resolve,reject)=>{
          const tx=this.db!.transaction('profile','readwrite'), objectStore=tx.objectStore('profile');
          const get=objectStore.get('main');let result:Progress,error:unknown;
          get.onsuccess=()=>{try {const latest=get.result===undefined?this.value:validateProgress(get.result);result=mergeBackup(latest,raw);objectStore.put(result,'main');}catch(cause){error=cause;tx.abort();}};
          tx.oncomplete=()=>resolve(result);tx.onabort=tx.onerror=()=>reject(error||tx.error);
        });
      } else {
        const update=async()=>{
          const latest=this.mode==='local'?validateProgress(JSON.parse(localStorage.getItem(LOCAL_KEY)||JSON.stringify(this.value))):this.value;
          const result=mergeBackup(latest,raw);await this.put(result);return result;
        };
        next=this.mode==='local'&&navigator.locks?await navigator.locks.request('neet-pg-local-write',update):await update();
      }
      this.value=next;this.notify();this.channel?.postMessage({revision:next.revision});return next;
    });
    this.queue = operation.catch(() => undefined); return operation;
  }
}
export function downloadFile(value: string, filename: string) {
  const url = URL.createObjectURL(new Blob([value], { type: 'application/json' }));
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename; anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
