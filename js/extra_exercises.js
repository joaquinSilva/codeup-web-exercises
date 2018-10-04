"use strict";

// 1. Counting the Number of Characters
//
// Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains.
//
//     Example Output
// What is the input string? Homer
//     Homer has 5 characters.
//
//     Constraints
//
// - Be sure the output contains the original string.
//
// - If the user enters nothing, state that the user must enter something in the program

// var userInputFirstName = prompt("Please enter your first name.");
// var firstNameLength = userInputFirstName.length;
//
//
// if (userInputFirstName == false) {
//     alert("Please enter your first name.");
// } else {
//     alert(userInputFirstName + " has " + firstNameLength + " characters!");
// }


// 2. Mad Lib
//
// Mad libs are a simple game where you create a story template with blanks for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
//     Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.

//     Example Output
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly
// Do you walk your blue dog quickly? That's hilarious!
// Constraints
// • Use a single output statement for this program.
// • Ifyourlanguagesupportsstringinterpolationorstring
// substitution, use it to build up the output.

// var noun = prompt("Please enter a noun.");
// var verb = prompt("Please enter a verb.");
// var adjective = prompt("Please enter an adjective.");
// var adverb = prompt("Please enter an adverb.");
//
// var adLib = ("The " + adjective + " " + noun + " " + adverb + " " + verb + " " + "to school.");
//
// alert(adLib + " Haha, that is so funny!");
//
// 3. Simple math
// Example Output
// What is the first number? 10
//     What is the second number? 5
//     10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
// 10 / 5 = 2
// Constraints
//   • Values coming from users will be strings. Ensure that you convert these values to numbers before doing the math.
//   • Keeptheinputsandoutputsseparatefromthenumerical conversions and other processing.
//   • Generate a single output statement with line breaks in the appropriate spots.
//
// var userNumber1 = parseFloat(prompt("Please enter a number!"));
// var userNumber2 = parseFloat(prompt("Please enter a 2nd number!"));
//
// var plus = userNumber1 + userNumber2;
// var minus = userNumber1 - userNumber2;
// var multiply = userNumber1 * userNumber2;
// var divide = userNumber1 / userNumber2;
//
// var formula = ("What is the first number?: " + userNumber1 + "\n" + " What is the second number?: " + userNumber2 + "\n"
//     userNumber1 + " + " + userNumber2 + " = " plus + ' ' + "\n"
//     userNumber1 + " - " + userNumber2 + " = " minus + " " + "\n"
//     userNumber1 + " * " + userNumber2 + " = " multiply + " " + "\n"
//     userNumber1 + " / " + userNumber2 + " = " divide.');
//
// alert(formula);

//
// FUNCTIONS EXAMPLES

//func takes in a string

// returns true if string contains "a"
// returns false if does not
// test function

function hasLetterA(strInput) {
    var output;
    var hasSmallA = strInput.indexOf('a');
    var hasCapA = strInput.indexOf('A');
    output = (hasSmallA !== -1) || (hasCapA !== -1) ;
    return output;
}
    console.log(hasLetterA('box'));

// IIFE statement to wrap a javascript file to protect it from the global window and confusion by conflicting variables

()();

then

(function(){})();

then

(function() {
    "use strict";

})();