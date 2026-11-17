import { build } from 'esbuild';
import { spawnSync } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
await mkdir('.cache', { recursive: true });
await build({ entryPoints: ['tests/core.test.ts'], outfile: '.cache/core.test.mjs', bundle: true, platform: 'node', format: 'esm' });
const result = spawnSync(process.execPath, ['--test','.cache/core.test.mjs'], { stdio: 'inherit' });
process.exitCode = result.status ?? 1;
