const prompt = require('prompt-sync')({sigint: true});

let weight = Number(prompt("Enter your weight(kg): "))
let num = Number(prompt("Enter a number: "))

if(num === 1){
    console.log("Your weight is " + weight*0.78 + "kg" + " on Venus.")
}
if(num === 2){
    console.log("Your weight is " + weight*0.39 + "kg" + " on Mars.")
}
if(num === 3){
    console.log("Your weight is " + weight*2.65 + "kg" + " on Jupiter.")
}
if(num === 4){
    console.log("Your weight is " + weight*1.17 + "kg" + " on Saturn.")
}
if(num === 5){
    console.log("Your weight is " + weight*1.05 + "kg" + " on Uranus.")
}
if(num === 6){
    console.log("Your weight is " + weight*1.23 + "kg" + " on Neptune.")
}