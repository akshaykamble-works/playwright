// Arrays
// An array is a data structure that can hold multiple values at once. It is a collection of elements, where each element can be of any data type (e.g., numbers, strings, objects, etc.). Arrays are commonly used to store and manipulate lists of data in programming languages.

// Example 1: Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);
console.log("--------------------");

// Example 2: Accessing array elements
console.log("First fruit:", fruits[0]); // Apple
console.log("Second fruit:", fruits[1]); // Banana
console.log("Third fruit:", fruits[2]); // Cherry
console.log("--------------------");
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
console.log("--------------------");

// Example 3: Modifying array elements
fruits[1] = "Blueberry";
console.log("Modified Fruits:", fruits);
console.log("--------------------");

// Example 4: Adding new elements to an array
fruits.push("Durian");
console.log("Fruits after adding Durian:", fruits);
console.log("--------------------");

// Example 5: Removing the last element from an array
let removedFruit = fruits.pop();
console.log("Removed Fruit:", removedFruit);
console.log("Fruits after removal:", fruits);
console.log("--------------------");

// Example 6: Finding the length of an array
console.log("Number of fruits:", fruits.length);
console.log("--------------------");

// Example 7: Iterating through an array using forEach
console.log("Iterating with forEach:");
fruits.forEach(function(fruit) {
    console.log(fruit);
});
console.log("--------------------");

// Example 8: Using map to create a new array
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log("Uppercase Fruits:", upperCaseFruits);
console.log("--------------------");

// Example 9: Filtering an array
let filteredFruits = fruits.filter(function(fruit) {
    return fruit.startsWith("B");
});
console.log("Fruits that start with 'B':", filteredFruits);
console.log("--------------------");

// Example 10: Finding the index of an element
let index = fruits.indexOf("Cherry");
console.log("Index of Cherry:", index);
console.log("--------------------");

// Example 11: Checking if an array includes an element
let hasApple = fruits.includes("Apple");
console.log("Does the array include Apple?", hasApple);
console.log("--------------------");

// Example 12: Concatenating two arrays
let moreFruits = ["Elderberry", "Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log("All Fruits:", allFruits);
console.log("--------------------");

// Example 13: Slicing an array
let slicedFruits = allFruits.slice(1, 4);
console.log("Sliced Fruits (index 1 to 3):", slicedFruits);
console.log("--------------------");

// Example 14: Reversing an array
let reversedFruits = fruits.reverse();
console.log("Reversed Fruits:", reversedFruits);
console.log("--------------------");

// Example 15: Sorting an array
let sortedFruits = fruits.sort();
console.log("Sorted Fruits:", sortedFruits);
console.log("--------------------");

// Example 16: Joining array elements into a string
let fruitString = fruits.join(", ");
console.log("Fruits as a string:", fruitString);
console.log("--------------------");

// Example 17: Finding the maximum value in an array of numbers
let numbers = [5, 3, 8, 1, 4];
let maxNumber = Math.max(...numbers);
console.log("Maximum number:", maxNumber);
console.log("--------------------");

// Example 18: Finding the minimum value in an array of numbers
let minNumber = Math.min(...numbers);
console.log("Minimum number:", minNumber);
console.log("--------------------");

// Example 19: Removing duplicates from an array
let duplicateFruits = ["Apple", "Banana", "Apple", "Cherry", "Banana"];
let uniqueFruits = [...new Set(duplicateFruits)];
console.log("Unique Fruits:", uniqueFruits);
console.log("--------------------");

// Example 20: Flattening a nested array
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(Infinity);
console.log("Flattened Array:", flattenedArray);
console.log("--------------------");

// Example 21: Using reduce to sum an array of numbers
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);
console.log("Sum of numbers:", sum);
console.log("--------------------");

// Example 22: Using find to get the first element that meets a condition
let foundFruit = fruits.find(function(fruit) {
    return fruit.startsWith("C");
});
console.log("First fruit that starts with 'C':", foundFruit);
console.log("--------------------");

// Example 23: Using some to check if any element meets a condition
let hasLongName = fruits.some(function(fruit) {
    return fruit.length > 6;
});
console.log("Is there any fruit with a name longer than 6 characters?", hasLongName);
console.log("--------------------");

// Example 24: Using every to check if all elements meet a condition
let allStartWithB = fruits.every(function(fruit) {
    return fruit.startsWith("B");
});
console.log("Do all fruits start with 'B'?", allStartWithB);
console.log("--------------------");

// Example 25: Using for...of to iterate through an array
console.log("Iterating with for...of:");
for (let fruit of fruits) {
    console.log(fruit);
}       