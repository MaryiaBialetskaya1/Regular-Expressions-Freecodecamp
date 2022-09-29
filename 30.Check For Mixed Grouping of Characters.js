//30.Check For Mixed Grouping of Characters.js

//Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

//If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

//TASK: Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

//Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/g;
let result =myRegex.test(myString);

// - * - There's also an option that matches characters that occur zero or more times. The character to do this is the asterisk or star: *.

// - . -The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
