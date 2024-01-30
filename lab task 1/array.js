// arrays
let numbers = [1, 2, 3, 5, 6, 7];
let fruits = ['apple', 'banana', 'orange'];
let mixedArray = [1, 'two', {name:'Alice'}, [1, 2, 3400]];

// accessing array elements
let firstNumher = numbers[0];
let secondNumber = fruits[1];
let thirdElement = mixedArray[2];


console.log(firstNumher);
console.log(secondNumber);
console.log(thirdElement);


// adding and removing elements
numbers.push(10); // inserts at the end
fruits.pop(); // erases from the end
fruits.unshift('mango'); // enters in the beginning
fruits.shift(); // deletes from the beginning

// array iteration
// foreach loop
// performs a given function once for every element in the array
numbers.forEach( function(number){console.log(number);});


// maps
// calls a function for each element, creating a new array containing the results

let doubledNumbers = numbers.map((number)=> { return number * 2;});
console.log(`this is map:\n`+doubledNumbers);


// filter
// the filter method() is used to create a new array with elements that satisfies
// the given condition provided by a function, it does not modify the original array
// but returns a new array with elements that meets the condition

let evenNumbers = numbers.filter((num)=>{return num % 2 == 0;});

console.log("this is even elements from the numbers array : \n" + evenNumbers);
