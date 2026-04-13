//For Loop 
let a=1;
for(let i=0;i<10;i++){
    console.log(a);
    a++;
}
console.log("--------------------");
// Example 2: Print even numbers from 1 to 10
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("--------------------");
// Example 3: Print the multiplication table of 5
const num = 5;
for(let i=1;i<=10;i++){
    console.log(num + " x " + i + " = " + (num*i));
}
console.log("--------------------");
// Example 4: Sum of the first 10 natural numbers
let sum = 0;
for(let i=1;i<=10;i++){
    sum += i;
}
console.log("Sum of first 10 natural numbers is: " + sum);
console.log("--------------------");
// Example 5: Print the first 10 Fibonacci numbers
let n1 = 0, n2 = 1, nextTerm;
console.log("Fibonacci Series:");
for(let i=1;i<=10;i++){
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}       
// Reverse for loop
console.log("--------------------");
for(let i=10;i>0;i--){
    console.log(i);
}