  
function sayhi(){
    console.log("function say hi")
}//function declaratrion

sayhi()//function invokation

function multiply(a,b){
        console.log("the mutiplyis ",a*b)
    }


    multiply(2,5)//2 and 5 argument


    function multiplyret(c,d){
        return c*d
    }

    let product=multiplyret(2,2)//return 

    console.log(product)

    //Q. function as first class citizen || function expression------------------------------
    // js treat function and variable  as same 
    //we  can write a function in a variable


    let hello=function(){//this function are called anonemous  function
        console.log("i am function as first class citizen")
//and can call the variable 
    }//when we assign function to a variable we call it function expression

    //so we can write functin in a variable 
    hello() //calling the variable will act as function 


    //**************************************************************** */
//IIFE(immediately invoked function expression) write a function expression and call it there itself

let add=(function(a,b){ //write the function in paranthesis

return a+b})(2,65)
console.log(add)

//Summary: write
/* in js we can assign function to a variable and then call that variable
 */

/*these are 4 type of function */
