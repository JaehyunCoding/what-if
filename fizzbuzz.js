const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number: "))

if(num%15 === 0){
    console.log("FizzBuzz")
}
else if(num%3 === 0){
    console.log("Fizz")
}
else if(num%5 === 0){
    console.log("Buzz")
}