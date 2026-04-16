// String in javascript is a sequence of characters used to represent text. It is one of the most commonly used data types in programming and is essential for handling and manipulating textual data. In JavaScript, strings are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings based on existing ones.

// Example 1: Creating a string
let greeting = "Hello, World!";
console.log(greeting);
console.log("--------------------");

// Example 2: Concatenating strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);
console.log("--------------------");

// Example 3: Using template literals
let age = 30;
let message = `My name is ${fullName} and I am ${age} years old.`;
console.log(message);
console.log("--------------------");

// Example 4: Accessing characters in a string
console.log("First character of greeting:", greeting[0]);
console.log("Last character of greeting:", greeting[greeting.length - 1]);
console.log("--------------------");

// Example 5: String length
console.log("Length of greeting:", greeting.length);
console.log("--------------------");

// Example 6: String immutability
greeting[0] = "h"; // This will not change the string
console.log("After trying to change the first character:", greeting);
console.log("--------------------");
// Example 7: String methods
let str = "Hello, Playwright!";
console.log("Original String:", str);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Includes 'Playwright':", str.includes("Playwright"));
console.log("Replace 'Playwright' with 'World':", str.replace("Playwright", "World"));
console.log("Split by space:", str.split(" "));
console.log("Trimmed string:", "   Hello Playwright!   ".trim());
console.log("Substring (0, 5):", str.substring(0, 5));
console.log("Index of 'Playwright':", str.indexOf("Playwright"));
console.log("Starts with 'Hello':", str.startsWith("Hello"));
console.log("Ends with '!':", str.endsWith("!"));
console.log("Repeat the string 3 times:", str.repeat(3));
console.log("Character at index 6:", str.charAt(6));
console.log("Unicode value of 'P':", str.charCodeAt(6));
console.log("--------------------");

// Example 8: Checking if a string is empty
let emptyString = "";
console.log("Is the string empty?", emptyString === "");
console.log("--------------------");

// Example 9: Iterating through a string
let sampleString = "Playwright";
console.log("Iterating through the string:");
for (let i = 0; i < sampleString.length; i++) {
    console.log(sampleString[i]);
}
console.log("--------------------");

// Example 10: String interpolation with expressions
let a = 5;
let b = 10;
let resultMessage = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(resultMessage);
console.log("--------------------");

// Example 11: Multiline strings using template literals
let multilineString = `This is a multiline string.
It can span multiple lines without needing special characters.
This is useful for formatting text.`;
console.log(multilineString);
console.log("--------------------");
    
// Example 12: String comparison   
let string1 = "Hello";
let string2 = "hello";
console.log("Are the strings equal?", string1 === string2);
console.log("Are the strings equal (case-insensitive)?", string1.toLowerCase() === string2.toLowerCase());
console.log("--------------------");

// Example 13: String padding
let paddedString = "5".padStart(3, "0");
console.log("Padded String:", paddedString);
console.log("--------------------");

// Example 14: String slicing
let slicedString = sampleString.slice(0, 4);
console.log("Sliced String (0, 4):", slicedString);
console.log("--------------------");

// Example 15: String normalization
let accentedString = "Café";
let normalizedString = accentedString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
console.log("Normalized String:", normalizedString);
console.log("--------------------");

// Example 16: String to array of characters
let charArray = sampleString.split("");
console.log("Array of characters:", charArray);
console.log("--------------------");

// Example 17: Reversing a string
let reversedString = sampleString.split("").reverse().join("");
console.log("Reversed String:", reversedString);
console.log("--------------------");

// Example 18: Checking for palindromes
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}   
// Trim trimStart and trimEnd
let palindromeString = "A man a plan a canal Panama";
console.log(`Is "${palindromeString}" a palindrome?`, isPalindrome(palindromeString));  
console.log("--------------------");
// concat method
let stringA = "Hello";
let stringB = "World";
let concatenatedString = stringA.concat(" ", stringB);
console.log("Concatenated String:", concatenatedString);
console.log("--------------------");
