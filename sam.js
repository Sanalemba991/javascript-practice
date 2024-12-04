/*var a = 0;
var b = 1;
var n = 30; // Number of Fibonacci numbers to generate

for (var i = 0; i < n; i++) {
  console.log(a);  // Print the current Fibonacci number
  var next = a + b;  // Calculate the next Fibonacci number
  a = b;  // Update 'a' to the previous Fibonacci number
  b = next;  // Update 'b' to the next Fibonacci number
}*/
function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let space = " ".repeat(rows - i); // Spaces before the stars
    let stars = "*".repeat(2 * i - 1); // Stars for the pyramid row
    console.log(space + stars); // Print the row
  }
}

// Call the function with the desired number of rows
printPyramid(5); // You can change this number to print a bigger or smaller pyramid
