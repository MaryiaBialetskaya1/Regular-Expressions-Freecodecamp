//17.Match Ending String Patterns.js

//You can search the end of strings using the dollar sign character $ at the end of the regex.

//TASK: Use the anchor character ($) to match the string caboose at the end of the string caboose.


let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);