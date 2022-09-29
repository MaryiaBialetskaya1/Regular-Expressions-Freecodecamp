//9.Match Letters of the Alphabet.js

//Inside a character set, you can define a range of characters to match using a hyphen character: -.

//TASK:Match all the letters in the string quoteSample.

//Note: Be sure to match both uppercase and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]|[A-Z]/gi;
let result = quoteSample.match(alphabetRegex);