// 5.Extract Matches.js

//You can also extract the actual matches you found with the .match() method.

//To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

//TASK: Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);