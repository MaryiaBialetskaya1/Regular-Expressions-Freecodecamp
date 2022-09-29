//6.Find More Than the First Match.js

//To search or extract a pattern more than once, you can use the global search flag: g.

//TASK: Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

//Note: You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);