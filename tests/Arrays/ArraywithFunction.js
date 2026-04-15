// Array with Function

// Example 1: Using a function to manipulate array elements
function doubleArray(arr) {
    return arr.map(x => x * 2);
}
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleArray(numbers);
console.log("Doubled Numbers:", doubledNumbers);
console.log("--------------------");

function searchElement(fruits, element) {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === element) {
            return true;
        }
    }
    return false;
}

let fruits = ["Apple", "Banana", "Cherry"];

console.log(searchElement(fruits, "Banana")); // true
console.log(searchElement(fruits, "Durian")); // false

// Example all array value is converted to uppercase
let result = [];
function toUpperCaseArray(arr) {
 for(let i=0; i<arr.length; i++){
    result[i] = arr[i].toUpperCase();
 }
 return result;
}
let lowerCaseFruits = ["akash", "ketan", "ranjeet","vishal"];
toUpperCaseArray(lowerCaseFruits);
console.log("Uppercase Fruits:", result);