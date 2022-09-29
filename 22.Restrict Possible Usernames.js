//22.Restrict Possible Usernames.js

//TASK:
// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// - Usernames can only use alpha-numeric characters.

// - The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// - Username letters can be lowercase and uppercase.

// - Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)

//Code explanation:
// 1.^ - start of input
// 2.[a-z] - first character is a letter
// 3.[a-z]+ - following characters are letters
// 4.\d*$ - input ends with 0 or more digits
// 5.| - or
// 6.^[a-z] - first character is a letter
// 7.\d\d+ - following characters are 2 or more digits
// 8.$ - end of input

// EXAMPLE:
let username1 = "JackOfAllTrades";
const userCheck1 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result1 = userCheck1.test(username1);

// 1.^ - start of input
// 2.[a-z] - first character is a letter
// 3.[0-9]{2,0} - ends with two or more numbers
// 4.| - or
// 5.[a-z]+ - has one or more letters next
// 6.\d* - and ends with zero or more numbers
// 7.$ - end of input
// 8.i - ignore case of input