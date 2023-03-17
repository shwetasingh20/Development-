//with the help of fs module we can read write modify delete any file 
const fs = require('fs')
const path=require("path")

//1.we will be reading writing updating and deleting files 

fs.writeFileSync("f1.txt","i am from file f1")

//-------reading 
let content = fs.readFileSync("f1.txt")

console.log("output " + content)
console.log("hello")

fs.writeFileSync("f2.txt", "i am from f2")

fs.writeFileSync("f3.txt","")

//append file add data after the previous data
fs.appendFileSync("f3.txt","new data from f3")

//deleting file
fs.unlinkSync('f3.txt')


//Creating directories
//fs.mkdirSync("myDirectory")

//removing directories
//fs.rmdirSync("myDirectory")

//-------to check whether directory exist or not
//--existSync

let doesExist=fs.existsSync("myDirectory")
console.log(doesExist)

let folderPath="C:\\Users\\user\\OneDrive\\Desktop\\webdev\\WebDev\\3_Node"
let fcontent=fs.readdirSync(folderPath)
console.log("folder content is "+fcontent)
let source="C:\\Users\\user\OneDrive\\Desktop\\webdev\\WebDev\\3_Node\\k.txt"
let destination="C:\\Users\\user\\OneDrive\\Desktop\\webdev\\WebDev\\3_Node\\myDirectory"
let basename=path.basename(source)
let tobecopiedpath=path.join(destination, basename)
fs.copyFileSync(tobecopiedpath,destination)
