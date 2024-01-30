function great(name){
    console.log(`hellow ${name}`);
}

//great("Faisal");

// function return
function sum(a, b){
    return a + b; 
}
let result = sum(1, 2);
//console.log(result);

// arrow function

let sayhi = (name, age )=> console.log(  `hi ${name}, your age is ${age}`);

//sayhi("faisal", 25);

//annonymous function
// function without name

const func1 = function(name){
    console.log("this is annonymous function");
}

//passing a function as parameter

function operationOnNumbers(a, b, myfunc){
   return myfunc(a, b);
}


function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function Mul(a, b){
    return a * b;
}

let resltAddition = operationOnNumbers(1, 14, add);
let resltSub = operationOnNumbers(1, 14, sub);
let resltMul = operationOnNumbers(3, 14, Mul);

console.log(resltAddition);
console.log(resltSub);
console.log(resltMul);
