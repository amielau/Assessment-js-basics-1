const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let greeting = "Welcome to the password validator tool"
console.log(greeting);

reader.question("enter your password here", function(answer) {
    console.log("my password is" + answer);
});

var password = window.answer
console.log(password);

if (password.length >= 10) {
    console.log('password is long enough')
 } else {
     console.log('invalid password. password must be at least 10 characters')
 }

