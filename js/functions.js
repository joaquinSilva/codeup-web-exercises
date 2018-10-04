"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     var message = ("Hello, " + name + "!");
//     return message;
// }

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


// var helloMessage = sayHello('Joaquín');
// console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var myName = 'Joaquín';
// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(input) {
//     var output;
//     var number = parseFloat(input);
//     return output = (number === 2);
// }
//
// console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function calculateTip(x, y) {
//     var tipPercentage = (parseFloat(x)) / 100;
//     var totalBill = parseFloat(y);
//     var tipAmount = (totalBill * tipPercentage);
//     return tipAmount;
// }
//
// console.log(calculateTip(10, 100));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */



function calculateTip(a, b) {

    var x = prompt("Please enter the percentage you would like to tip.");
    var y = prompt("Please enter the total amount of your bill.");
    var tipPercentage = (parseFloat(x))/100;
    var totalBill = parseFloat(y);
    var tipAmount = (totalBill * tipPercentage);
    return tipAmount.toFixed(2);
}

alert("Your tip amount is $" + calculateTip());

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// function applyDiscount(x, y) {
//     var originalPrice = parseFloat(x);
//     var discountPercent = (parseFloat(y));
//     var newPrice = (originalPrice - (originalPrice * discountPercent));
//     return newPrice;
// }
//
//     console.log(applyDiscount(100, .1));

//






/** Function Drills


// Functions using conditionals but not loops or arrays:
*/

//     Make a function named isOdd(number)
//
// function isOdd(number) {
//     var response = (parseFloat(number) % 2) !== 0;
//     return response;
// }
//
// console.log(isOdd(0));

// Make a function named isEven(number)
//
// function isEven(number) {
//     var response = (parseFloat(number) % 2) === 0;
//     return response;
// }
//
// console.log(isEven(3));

// Make a function named identity(input) that returns the input exactly as provided.

// function identity(input) {
//     var output = input;
//     return output;
// }
//
// console.log(identity("hello"));

// Make a function named isFive(input)

// function isFive(input) {
//     var output = (parseFloat(input) === 5);
//     return output;
// }
//
// console.log(isFive(5));

// Make a function named addFive(input) that adds five to some input.

// function addFive(input) {
//     var output = parseFloat(input) + 5;
//     return output;
// }
//
// console.log(addFive(0));

// Make a function named isMultipleOfFive(input)

// function isMultipleOfFive(input) {
//     var output = (parseFloat(input) % 5) === 0;
//     return output;
// }
//
// console.log(isMultipleOfFive(55));
//

// Make a function named isThree(input)

// function isThree(input) {
//     var output = (input % 3) === 0
//     return output;
// }
//
// console.log(isThree(9));

// Make a function named isMultipleOfThree(input)
// Make a function named isMultipleOfThreeAndFive(input)
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// Make a function named isTrue(boolean)
// Make a function named isFalse(boolean)
// Make a function named isTruthy(input), remember that values other than true will behave like true
// Make a function named isFalsy(input), remember that values other than false behave like false
// Make a function named isVowel(letter)
// Make a function named isConsonant(letter)
// Make a function named isCapital(letter)
// Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if the input is not zero
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// Make a function named trim(string) that removes empty spaces before and after the input.
// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
// Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.