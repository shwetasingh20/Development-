/*
.replace("replace this ","replace with")
.length
.slice(start,length-1)
.toLowerCase()
.toUpperCase()
.concat(" ",second strin ) it will add " value"(beech mein add karega) and then concat
trim() to remove white spaces
*/


//String is a sequence of characters 
let str='spark463rabbi99*'
//       0123456789012345                         --just for visulising index aise he
console.log(str)

// Methode--

// 1) length fo String 
console.log(str.length)

// 2) Extracting a part fo a string 
        // 1) Slice --it is used to extract part fo string 
        // slice(start,end+1)or slice(start,length-1)

        console.log(str.slice(8,13)) // i wanted to extract rabbi 

        // 2) substr  
            // subster(start,length)
        console.log("substring is ",str.substr(8,5))
        //*******************************end*********** */

//String in Js are mutable, so we need to

//Replacing String Content
let sayHello='Hello Shweta'
let sayBye=sayHello.replace('Hello','Bye re')
console.log("it say hello "+sayHello)
console.log("It say bey "+sayBye)

//Upper case and lower case
let text1='Hello shweta'
let text2=text1.toLowerCase()
console.log(text2)
let text3=text1.toUpperCase()
console.log(text3) 

//concatenation(concat methot)
let firstString="Aloo"
let SecondStrin='lelo'
let  jodo=firstString.concat(' ',SecondStrin)
let  jodo1=firstString.concat('saste ',SecondStrin)
console.log(jodo)
console.log(jodo1)

//Trim to remove whitespace
let text='         Hello        '
console.log(text) 
let textt=text.trim()
console.log(textt)