"use strict";


// ================================= CONDITIONALS BONUSES
//
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.

// function makeJustinMessage(input) {
//     if (input === "justin") {
//         return alert("It's Justin!");
//     } else {
//         return alert("It's not Justin.")
//     }
// }
//
// makeJustinMessage("joaquin");

//     If the input contains white space or numbers, return the string "INVALID INPUT".


// function makeJustinMessage(input) {
//     var hasWhiteSpace = (input.indexOf(' ') >= 0);
//
//     if (input === "justin") {
//         return alert("It's Justin!");
//     } else if (hasWhiteSpace === true) {
//         return alert("INVALID INPUT");
//     } else if (isNaN(input) === false) {
//         return alert("INVALID INPUT");
//     }
//      else {
//         return alert("It's not Justin.");
//     }
// }
//
// makeJustinMessage("9");

//     __
// Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.

// function streeLights(lightColor) {
//     lightColor = lightColor.toLowerCase();
//     var action;
//     switch(lightColor) {
//         case "green":
//             action = "The light is green, so you can keep driving.";
//             break;
//         case "yellow":
//             action = "The light is yellow, so you should stop if you can safely do so.";
//             break;
//         case "red":
//             action = "The light is red, so you must stop and wait for the light to turn green.";
//             break;
//         default:
//             action = "Oops! That is not one of the 3 colors for traffic lights. Please try again.";
//             break;
//     }
//     return alert(action);
// }
//
// streeLights("Green");

//     __
// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."

// function genericFunction(input) {
//     var output = input;
//     if (input.length === 0) {
//         return alert('no input provided');
//     } else {
//         return output;
//     }
// }
//
// genericFunction("");

// __
// Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//     __
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
// __
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else

// function isNumber(input) {
//     input = prompt("Please enter an input.");
//
//     if (isNaN(input) === false) {
//         return alert("Your input is a number!");
//     } else {
//         return alert("Your input is not a number.");
//         }
// }
//
// isNumber();

//     - refactor to use a ternary operator

function isNumber(input) {
    input = prompt("Please enter an input.");
    var output = isNaN(input) === false;

    return (output) ? alert("Your input is a number!") : alert("Your input is not a number.");
}

isNumber();


// __
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
// __
// GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units