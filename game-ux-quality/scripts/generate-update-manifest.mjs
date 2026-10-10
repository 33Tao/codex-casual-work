import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';import {digest} from './update-and-start.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const names=['package.json','server/local.mjs','server/worker.js','db/0000.sql','scripts/update-and-start.mjs','启动平台.cmd','启动平台.command','更新并启动.cmd','更新并启动.command','使用说明.md'];
const files=[];for(const name of names){const bytes=await fs.readFile(path.join(root,name));files.push({path:name,size:bytes.length,sha256:digest(bytes)})}await fs.writeFile(path.join(root,'update-manifest.json'),JSON.stringify({format:1,files},null,2)+'\n');console.log('Generated update manifest for '+files.length+' program files');
