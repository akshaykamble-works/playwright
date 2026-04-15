// =======================================================
// Example 1 : Print numbers from 1 to 5
// =======================================================
for (let i = 1; i <= 5; i++) {
// Iteration flow:
// i = 1 → 1 <= 5 → true → print 1
// i = 2 → 2 <= 5 → true → print 2
// i = 3 → 3 <= 5 → true → print 3
// i = 4 → 4 <= 5 → true → print 4
// i = 5 → 5 <= 5 → true → print 5
// i = 6 → 6 <= 5 → false → loop stops
console.log(i);
process.stdout.write(i + " "); //to print the value same line
}
console.log();
console.log("Loop Completed");