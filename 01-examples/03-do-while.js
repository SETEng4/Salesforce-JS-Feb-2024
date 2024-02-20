// Keep accepting a number from the user until he enters an even number
var userInput;
do {
    userInput = prompt("Enter an even number")
} while (userInput % 2 == 1)
console.log("The given even number : ", userInput)