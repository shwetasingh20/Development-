//Array provides you an ordered colecton of elements
//since js is dynamic type so we dont have to specifiy array size_type

let arr=[]
let car=['tata',3,true,null]
//in js we can store different values of different dataType
console.log(car)

let cars2=['ferrari','jaguar','BMW','tesla']
//Accessing the elements of an array 
console.log(cars2[0])
console.log(cars2[4])//undefined
console.log(cars2[1])
console.log(cars2[2])
console.log(cars2[3])
console.log(cars2[4])//undefined 

//Replace an Element of an Arrary
cars2[2]='bently'
console.log(cars2)

//Add a new element to the carc
// cars2[5]='mercedes'
// console.log(cars2) 

//Intervew question **********************

//QQQQQQQ what if we skip some the element in array 
//Ans-then the rest between  element will be---- empty item------ 
cars2[7]='mercedes'
console.log(cars2) 
//[ 'ferrari', 'jaguar', 'bently', 'tesla', <3 empty items>, 'mercedes' ]


//Array Method()

    //pop method()- this method removes the last element from the array

    console.log('lpoped is',cars2.pop())
    console.log('after pop method',cars2) 


    //push method - *******this add an element at the end of the array
    cars2.push('royace')
    console.log('pushed  is',cars2)

    //  shift methode-*************removes element from the starting of an array

    console.log('shift is ',cars2.shift())
    console.log('after shift is',cars2)

    //  unshift methode -************adds an element in the starting of the array
    // (opposite of shift)

    cars2.unshift('Ashton Martin')
    console.log('after unshift is',cars2)

    //length of an array****************************
     
    console.log(cars2.length)

    //MultiDimensional Array 

let matrix=[
    [1,3,5],
    [4,9,11],
    [0,6,12]
]
console.log('matrix output:',matrix[1][1])