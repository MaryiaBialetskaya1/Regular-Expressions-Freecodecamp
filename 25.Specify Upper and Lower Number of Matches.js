//25.Specify Upper and Lower Number of Matches.js

//Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

//You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

//For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

//TASK: Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);

//Remember to use \s after Oh{3,6} to include a white space, followed by no to pass all test cases. All test cases are written using a capital O, however the testcases could also be passed by using ignore-case : /oh{3,6}\sno/i

