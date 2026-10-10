#!/bin/bash
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then
 echo "请先安装 Node.js 24 LTS。"
 read -r -p "按回车退出"
 exit 1
fi
node scripts/update-and-start.mjs
