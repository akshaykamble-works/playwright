// String Methods
let string = "Hello Playwright!";

// Example 1: Length of the string
console.log("Length of the string:", string.length);
console.log("--------------------");

// Example 2: Convert to uppercase
console.log("Uppercase:", string.toUpperCase());
console.log("--------------------");
// Example 3: Convert to lowercase
console.log("Lowercase:", string.toLowerCase());
console.log("--------------------");

// Example 4: Check if the string includes a substring
console.log("Includes 'Playwright':", string.includes("Playwright"));
console.log("--------------------");

// Example 5: Replace a substring
console.log("Replace 'Playwright' with 'World':", string.replace("Playwright", "World"));
console.log("--------------------");

// Example 6: Split the string into an array
console.log("Split by space:", string.split(" "));
console.log("--------------------");

// Example 7: Trim whitespace from the string
let stringWithWhitespace = "   Hello Playwright!   ";
console.log("Trimmed string:", stringWithWhitespace.trim());
console.log("--------------------");

// Example 8: Get a substring
console.log("Substring (0, 5):", string.substring(0, 5));
console.log("--------------------");

// Example 9: Find the index of a substring
console.log("Index of 'Playwright':", string.indexOf("Playwright"));
console.log("--------------------");

// Example 10: Check if the string starts with a substring
console.log("Starts with 'Hello':", string.startsWith("Hello"));
console.log("--------------------");

// Example 11: Check if the string ends with a substring
console.log("Ends with '!':", string.endsWith("!"));
console.log("--------------------");

// Example 12: Repeat the string
console.log("Repeat the string 3 times:", string.repeat(3));
console.log("--------------------");

// Example 13: Get a character at a specific index
console.log("Character at index 6:", string.charAt(6));
console.log("--------------------");

// Example 14: Get the Unicode value of a character
console.log("Unicode value of 'P':", string.charCodeAt(6));
console.log("--------------------");

// Example 15: Check if the string is empty
let emptyString = "";
console.log("Is the string empty?", emptyString === "");
console.log("--------------------");

// Example 16: Concatenate strings
let string1 = "Hello";
let string2 = "World";
console.log("Concatenated string:", string1.concat(" ", string2));
console.log("--------------------");

// Example 17: Pad the string
console.log("Padded string (start):", string.padStart(20, "*"));
console.log("Padded string (end):", string.padEnd(20, "*"));
console.log("--------------------");

// Example 18: Check if the string is a palindrome
function isPalindrome(str) {
  const cleanedString = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}
console.log("Is 'A man a plan a canal Panama' a palindrome?", isPalindrome("A man a plan a canal Panama"));     
