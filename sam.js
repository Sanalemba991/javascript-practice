var a = 0;
var b = 1;
var n = 10; // Number of Fibonacci numbers to generate

for (var i = 0; i < n; i++) {
  console.log(a);  // Print the current Fibonacci number
  var next = a + b;  // Calculate the next Fibonacci number
  a = b;  // Update 'a' to the previous Fibonacci number
  b = next;  // Update 'b' to the next Fibonacci number
}
