// While loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The loop continues to execute as long as the condition evaluates to true. Once the condition becomes false, the loop terminates and the program continues with the next statement after the loop.

/*Syntax:
while (condition) {
  // code to be executed
}
*/

// Example:
let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}
console.log("************");
// Example 2: Sum of first 10 natural numbers
let sum = 0;
let n = 5;
let i = 1;
while (i <= n) {
  sum += i; // sum = sum + i
  i++;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);
console.log("************");
//Example 3:
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

//Example 4:
let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}
console.log("************");
// Example 5:
let j=2;
while(j<=10){
    console.log(j);
    j+=2;
}   

// Example 6
let k=1;
while(k<=10){
    if(k%2===0){
        console.log(k + " is even.");
    }else{
        console.log(k + " is odd.");
    }
    k++;
}