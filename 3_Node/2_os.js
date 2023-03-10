//The os module provides operating system-related utility methods 
//and properties. It can be accessed using:
const os=require("os");
console.log(os.arch())
console.log(os.platform())
console.log(os.networkInterfaces())//give details about your netwrk 
console.log(os.cpus())//cpu specification