// Using 'var' for a mathematical operation
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
console.log('Sum using var:', sum);  // Output: 15

// Using 'let' for a mathematical operation
let a = 20;
let b = 4;
let product = a * b;
console.log('Product using let:', product);  

// Using 'const' for a mathematical operation
const PI = 3.14;
const radius = 7;
const area = PI * radius * radius;
console.log('Area using const:', area);  // Output: 153.86

// Combining let and const in a mathematical expression
let sideLength = 6;
const squareArea = sideLength * sideLength;
console.log('Square area:', squareArea);  


var difference = num1 - num2;
console.log('Difference using var:', difference);  

let division = a / b;
console.log('Division using let:', division);  

// Attempting to reassign a 'const' will cause an error
// PI = 3.1415;  // Uncommenting this will throw a TypeError
