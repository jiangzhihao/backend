nodemon监听src目录下，包括ts，tsx扩展名 执行 ts-node命令
node inspect用于浏览器调试
node --inspect -r ts-node/register ./src/index.ts 提前加载ts-node/register模块执行