//child Process is a node module used to create sub process within 
//you can perform different tast with you script

const cp= require("child_process")
//console.log("Opening Calculator")
cp.execSync("calc")
//cp.execSync("code")
//cp.execSync(" start chrome https://www.google.com/slides/about/")
let output=cp.execSync("node test.js")
console.log( ""+output)
cp.execSync("start chrome  https://shwetasingh20.github.io/test-we bsite/")