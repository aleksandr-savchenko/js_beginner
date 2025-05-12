// Instructions
let a;
const b = 5;
if (a > b) {
    console.log('a is langer');
}


for (let i = 0; i++; i < 5) {
    console.log(i);
}

// Expressions


// Array
const myArray = [1, 2, 3]
console.log(myArray);


const myArrayTwo = (1, 2, 3)
console.log(myArrayTwo);


myArray === myArrayTwo


// Array vs Object
// 1. Object
const myObject = {
    0: 1, // properties
    1: 2,
    2: 3,
    lenght: 3
}

console.log(myObject);


// 2. Array
const myArrays = [1, 2, 3]
console.log(myArrays);
// Proto

// different prototypes, but look the same

const myArray4 = [1, 2, 3]
console.log(myArray4)
myArray.forEach(el => console.log(el * 2))
console.log(myArray4)


const rest = myArray.forEach(el => console.log(el * 2));
console.log(rest); // undefined because of loop through an array, not return data


// Example 10, map-method for Array
const myArray10 = [1, 2, 3]
console.log(myArray10)
const newArray10 = myArray10.map(el => el * 3)
console.log(newArray10);
console.log(myArray10);


// Example 11
const myArray11 = [1, 2, 3]
console.log(myArray11)
const newArray11 = myArray11.map((el) => {
    el * 3 ; //undefined because absence return function
})
console.log(newArray11);
console.log(myArray11);


// Example 12
const myArray12 = [1, 2, 3]
console.log(myArray12)
const newArray12 = myArray11.map((el) => {
   return el * 3 ; 
})
console.log(newArray12);
console.log(myArray12);

// Example 13
const myArray13 = [1, 2, 3]
console.log(myArray13)
const newArray13 = myArray11.map(function(el) {
   return el * 3 ; // the same with Example 12
})
console.log(newArray13);
console.log(myArray13);