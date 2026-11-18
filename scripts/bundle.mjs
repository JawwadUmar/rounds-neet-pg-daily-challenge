import { copyFile, cp, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

export function bundleOptions(outdir, production) {
  return {
    entryPoints: {app:'src/main.tsx'}, outdir, bundle:true, format:'esm', splitting:true,
    chunkNames:'assets/chunks/[name]-[hash]', assetNames:'assets/fonts/[name]-[hash]',
    loader:{'.woff2':'file'}, target:['es2022'], jsx:'automatic',
    minify:production, sourcemap:!production,
    define:{'process.env.NODE_ENV':JSON.stringify(production?'production':'development')},
  };
}
export async function copyStatic(outdir) {
  await mkdir(join(outdir,'assets/fonts'),{recursive:true});
  await Promise.all([
    copyFile('index.html',join(outdir,'index.html')),
    copyFile('index.html',join(outdir,'404.html')),
    cp('public',outdir,{recursive:true}),
    copyFile('node_modules/@fontsource-variable/playfair-display/LICENSE',join(outdir,'assets/fonts/Playfair-Display-LICENSE.txt')),
    copyFile('node_modules/@fontsource/courier-prime/LICENSE',join(outdir,'assets/fonts/Courier-Prime-LICENSE.txt')),
  ]);
}
