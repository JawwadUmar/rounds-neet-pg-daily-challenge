import { build } from 'esbuild';
import { mkdir, copyFile, cp, rm } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await build({ entryPoints: ['src/main.tsx'], outfile: 'dist/app.js', bundle: true, format: 'esm', target: ['es2022'], jsx: 'automatic', minify: true, sourcemap: false, define: { 'process.env.NODE_ENV': '"production"' } });
await copyFile('index.html','dist/index.html');
await cp('public','dist',{recursive:true});
for (const file of ['dist/app.js.map','dist/app.css.map']) await rm(file,{force:true});
console.log('Static build ready in dist/');
