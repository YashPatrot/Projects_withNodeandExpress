const os=require("os");
console.log(os.EOL);
console.log(os.availableParallelism())
console.log(os.arch())
// console.log(os.constants)
// console.log(os.cpus());

console.log(os.devNull);
console.log(os.endianness());
console.log((os.freemem()/(1024*1024*1024)))
console.log((os.totalmem()/(1024*1024*1024)))
console.log(os.hostname())
console.log(os.platform())
console.log(os.userInfo())

