
/* 
let obj={
    key: value,
    key1:value,

}
for (let key in obj) {}

*/
//object is key value pair and
//object is not ordered collection 
const cap={
    firstName: "Shweta",//here firstName is key and shweta is value
    lastName: "Singh",
    friende:['harshita','Astha'],
    age:22,
    isAvanger:true,
    address:{
        state:'madhyapradesh',
        city:'bijuri',
        pin :484440
    }, 
    sayHi: function fn(){
        console.log("hello cap function from inside")
    }
}
console.log(cap.firstName)//dot notation ,Shweta
console.log(cap['firstName'])//bracate notation ,Shweta
console.log(cap.lastName)//Singh
console.log(cap.age)//22

console.log(cap.address)//{ state: 'madhyapradesh', city: 'bijuri', pin: 484440 }
console.log(cap.address.pin)//484440
console.log(cap.friende[1])//accessing array element from  object,Astha
// not tihi console.log(sayHi(cap ))
cap.sayHi()

//----------Intervew--------------------------------
//for in loop 

for(let i in cap){
    console.log('key:',i,"value:",cap.i)
}
/*k
ey: firstName value: undefined
key: lastName value: undefined
key: friende value: undefined
key: age value: undefined
key: isAvanger value: undefined
key: address value: undefined
key: sayHi value: undefined
*/

for(let key in cap){
    console.log('key:',key,"value:",cap[key])
}

/*key: firstName value: Shweta
key: lastName value: Singh
key: friende value: [ 'harshita', 'Astha' ]
key: age value: 22
key: isAvanger value: true
key: address value: { state: 'madhyapradesh', city: 'bijuri', pin: 484440 }
key: sayHi value: [Function: fn]  */
cap.isAvanger=false

cap.movies=['kuchnahi', 'bekar' ]//to** add** new property in object
console.log(cap)  
delete cap.age // to delete
console.log('after delete ',cap)  
/*{
  firstName: 'Shweta',
  lastName: 'Singh',
  friende: [ 'harshita', 'Astha' ],
  age: 22,
  isAvanger: false,
  address: { state: 'madhyapradesh', city: 'bijuri', pin: 484440 },
  sayHi: [Function: fn],
  movies: [ 'kuchnahi', 'bekar' ]
}
 */