import { createServer } from 'node:net';
import { context } from 'esbuild';
import { copyStatic, bundleOptions } from './bundle.mjs';

function isPortAvailable(port, host = '127.0.0.1') {
  return new Promise(resolve => {
    const s = createServer();
    s.once('error', () => resolve(false));
    s.listen(port, host, () => s.close(() => resolve(true)));
  });
}

async function resolvePort(preferredPort, host = '127.0.0.1') {
  if (process.env.PORT) return Number(process.env.PORT);
  let port = preferredPort;
  while (!(await isPortAvailable(port, host))) {
    console.warn(`Port ${port} is occupied by another process, trying ${port + 1}...`);
    port++;
  }
  return port;
}

const outdir = '.cache/preview';
await copyStatic(outdir);
const ctx = await context(bundleOptions(outdir, false));
await ctx.watch();
const port = await resolvePort(4173);
const server = await ctx.serve({ servedir: outdir, host: '127.0.0.1', port });
console.log(`Local: http://127.0.0.1:${server.port}`);
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, async () => { await ctx.dispose(); process.exit(0); });
