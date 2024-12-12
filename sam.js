/*var a = 0;
var b = 1;
var n = 30; // Number of Fibonacci numbers to generate

for (var i = 0; i < n; i++) {
  console.log(a);  // Print the current Fibonacci number
  var next = a + b;  // Calculate the next Fibonacci number
  a = b;  // Update 'a' to the previous Fibonacci number
  b = next;  // Update 'b' to the next Fibonacci number

function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let space = " ".repeat(rows - i); // Spaces before the stars
    let stars = "*".repeat(2 * i - 1); // Stars for the pyramid row
    console.log(space + stars); // Print the row
  }
}

// Call the function with the desired number of rows
printPyramid(5); // You can change this number to print a bigger or smaller pyramid

let a = 1;
let b = 3;

for (let i = 0; i <= 10; i++) {
  a++;
 
}
console.log(a);*/
/*
this for add 1 to 10 number

let sum = 1;

for (let i = 1; i <= 10; i++) {
  sum *= i;
}

console.log(sum);*/

/*
let a = 30;
let b = 40;

switch (true) {
  case (a > b):
    console.log("a is greater than b");
    break;
  case (a < b):
    console.log("a is less than b");
    break;
  case (a === b):
    console.log("a is equal to b");
    break;
  default:
    console.log("Unknown condition");
}*/
/*
array style multiflying
const numbers = [1, 2, 3, 4, 5, 6,]
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);*/

/*normal function
function Ram (a, b) {
  let c = a + b;  // Calculate the sum
  return { sum: c };  // Return an object with a key 'sum'
}

console.log(Ram(3, 4));  // Output the result
*/
/*
const Ram = (a, b) => {
  let c = a + b;  // Calculate the sum
  return { sum: c };  // Return an object with a key 'sum'
};

console.log(Ram(3, 4));  // Output the result */
//const Ram = (() => {
  //let a = 10;
  //let b = 20;
  //return {
    //sum: a + b,
  //};
//})();

//console.log(Ram.sum); // This will log the sum to the console (30)
/* console.log('Hello World');

setInterval(() => {
  console.log('bye')
  
}, 5000);

const obj=[{name:'sam'}];

console.log(obj)*/
/*const jediArr=[
  {name:'Luke',age:25},
  {name:'Leia',age:30},
  {name:'Han',age:35},

]
console.log(jediArr)
console.table(jediArr)*/


//aserrt
/*
const name1="Sam";
const name2="Ram";
const name3=50

const errMsg="Name has to be string"

console.assert(typeof name1 === "string",errMsg);
console.assert(typeof name2 === "string",errMsg);
console.assert(typeof name3 === "string",errMsg)
*/

/*

const function1=()=>{
  console.log("Hello World");
}
const function2=()=>{
  console.log("Hello2")
}

const mainFunc=()=>{
  function1()
  function2()
}
mainFunc();*/

/*
console.log("Timer");

for(let i=0;i<100000000;i++){
  console.log("Ram")
}
console.timeEnd("Timer")*/
//console.error("this is an Soiba")
//console.info("Thi is info")
//aconsole.warn("warning pibei")

//type yengbei

// let firstName="ram";
// console.log(typeof firstName);

//object creation
// let courese={
//   name:"ram",
//   age:20,
// }
// console.log( courese.name);

// let property='hours';

// console.log( course[property]);
//  length yengba

// let product=['blue','red'];


// product[0]=42;

// console.log(product.length)

// function sam(ram)

// {
//   console.log("Hello "+ ram);
// }
// sam('Romeo');

let a = 0;

for (let i = 0; i < 20; i++) {
  a = i;
}

console.log(i); // This will log 20 because the loop ends when i reaches 20


