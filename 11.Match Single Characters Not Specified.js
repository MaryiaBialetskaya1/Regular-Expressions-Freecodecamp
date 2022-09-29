//11.Match Single Characters Not Specified.js

//To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

//TASK: Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);