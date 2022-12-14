//26.Specify Only the Lower Number of Matches.js

//To only specify the lower number of patterns, keep the first number followed by a comma.

//For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

//TASK: Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);