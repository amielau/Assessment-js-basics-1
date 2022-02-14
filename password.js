const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Type in a password", function(input) {
    if(input.length > 10) {
        console.log("your password is sufficient");
    } else {
        console.log("not a valid password");
    }
});

/*

this is my original code below -

let greeting = "Welcome to the password validator tool"
console.log(greeting);

reader.question("enter your password here", function(answer) {
    console.log("my password is" + answer);
});

var password = answer
console.log(password);

if (password.length >= 10) {
    console.log('password is long enough')
 } else {
     console.log('invalid password. password must be at least 10 characters')
 }
*/
