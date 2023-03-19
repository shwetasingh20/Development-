

function add(a,b){
    console.log("the sum is ",a+b)
}


function sub(a,b){
    console.log("the sub is ",a-b)
}

function mul(a,b){
    console.log("the mul is ",a*b)
}

function div(a,b){
    console.log("the div is ",a/b)
}

module.exports={ //creating object this mudule.exports is object
    addition:add,
    substract:sub,
    multiply:mul,
    division:div

}