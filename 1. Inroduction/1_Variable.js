var a;
console.log(a)// undefined 
var a=2

console.log(a)
var a='i am a string'
console.log(a)
var a=true
console.log(a)
a=null
console.log(a)

/*where  we don't have to define datatye  so javaScript  is a dynamicall  type language
shortcomming of var
1.it let you re-declare 
1.It is dynamicall type language 
*/
var b=2.4  
var c='d'
var d= 'I am String'
console.log(b +'\n' +c+'\n' +d)

let k="shweta"
 
console.log(k)


var flag= true
var num=23
for(var i=2;i*i<num;i++){
    if(num%i==0){
        flag=false
        break
    }  
}
    if (flag){
        console.log("ehe number is prime")
    }
    else{
        console.log("number is not prime")
    }
    

    const a=2
    //reassignmet is not allowed
    //redeclaration is not allowed

    
//in let we can reassign the
//difference between let and const before
/*
@ var can be redeclared  but in let we cannot redeclare 
@ var can be acessed ouside the scope(which is not a good thing),
     but let can only be accessed inside the scop block 
*/
/****interbiew question
Q1.difference between let and var 
Q2.scoping of let and var
*/