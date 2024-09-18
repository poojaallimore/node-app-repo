
const { log } = require('console');
const os = require('os');

 

console.log('My first app');

// console.log(`File Name: ${__filename}`);

// console.log(`Directory Name: ${__dirname}`);

 

console.log("=============== Built in Module - OS =======================");

console.log(`Arch: ${os.arch()}`);

console.log(os.cpus());

console.log(`Free System Memory:${os.freemem()}`);

console.log(`System Memory:${os.totalmem()}`);

console.log(`Host Name:${os.hostname()}`);

console.log(`OS Platform:${os.platform()}`);

console.log(`Os release:${os.release()}`);

console.log(`Os Type:${os.type()}`);

console.log(`System Uptime:${os.uptime()}`);

console.log(`Current effective user:${os.userInfo}`);

console.log(global);

console.log(console);

console.log(process);

console.log(__filename);

console.log(__dirname);














