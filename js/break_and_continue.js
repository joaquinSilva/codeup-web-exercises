"use strict";

var userInput = prompt("Please enter an odd number between 1 and 50.");
console.log("Number to skip: " + userInput + ".");

for (var i = 1; i <= 50; i++) {
    if (((userInput % 2) === 0) || userInput <= 0 || userInput >= 51 || isNaN(userInput) === true) {
        alert("Please enter a valid odd number between 1 and 50.");
        break;
    }
    if (i % 2 === 0) {
        continue;
    } if (i === parseFloat(userInput)) {
        console.log("Yikes! Skipping number " + i + ".");
        continue;
    }
    console.log ("Here is an odd number: " + i + ".");
}

//
// this needs 2 loops to work properly. a do while works better