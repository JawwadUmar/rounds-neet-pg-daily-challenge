import { build } from 'esbuild';
import { readdir, rm } from 'node:fs/promises';
import { copyStatic, bundleOptions } from './bundle.mjs';
await copyStatic('dist');
const result = await build({...bundleOptions('dist',true),metafile:true});
const output = new Set(Object.keys(result.metafile.outputs).map(path=>path.replaceAll('\\','/')));
for (const file of await readdir('dist/assets/chunks')) {
  const path='dist/assets/chunks/'+file;
  if (/^(?:20\d{2}|chunk)-[A-Z0-9]{8}\.js(?:\.map)?$/.test(file) && !output.has(path)) await rm(path);
}
for (const map of ['dist/app.js.map','dist/app.css.map']) await rm(map,{force:true});
console.log('Static build ready in dist/');
