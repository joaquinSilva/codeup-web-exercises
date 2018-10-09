"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var willEnterNumber = confirm("Would you like to enter a number?");
//
//
//     if(willEnterNumber === true) {
//         var entersNumber = prompt("Great! Please enter a number.");
//         var isEvenOrOdd = (entersNumber % 2) === 0;
//         var isEvenOrOddDisplay = (isEvenOrOdd) ? "Your number is an even number!" : "Your number is an odd number!";
//         var numberPlus100 = parseFloat(entersNumber) + 100;
//         var positiveOrNegative = (entersNumber > 0) ? "Your number is a positive number!" : "Your number is a negative number!";
//             if(isNaN(entersNumber) !== true) {
//                 alert(isEvenOrOddDisplay);
//                 alert("Your number plus 100 is equal to " + numberPlus100 + ". How interesting!");
//                 alert(positiveOrNegative);
//             } else {
//                 alert("Oops! What you entered is not a number. Too bad, try again!");
//             }
//     }


    // ||

// var willEnterNumber = confirm("Would you like to enter a number?");
//
// if(willEnterNumber === true) {
//     var entersNumber = prompt("Great! Please enter a number.");
//     var isEvenOrOddDisplay = (isEvenOrOdd()) ? "Your number is an even number!" : "Your number is an odd number!";
//     var positiveOrNegative = (entersNumber > 0) ? "Your number is a positive number!" : "Your number is a negative number!";
//     if(isNaN(entersNumber) !== true) {
//         alert(isEvenOrOddDisplay);
//         alert("Your number plus 100 is equal to " + numberPlus100(entersNumber) + ". How interesting!");
//         alert(positiveOrNegative);
//     } else {
//         alert("Oops! What you entered is not a number. Too bad, try again!");
//     }
// }
// function isEvenOrOdd(entersNumber) {
//     return (entersNumber % 2) === 0;
// }
//
// function numberPlus100(entersNumber) {
//     return (parseFloat(entersNumber) + 100);
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(colorString) {
//     if (colorString === 'red') {
//         alert("Red apples are the tastiest apples!")
//     } else if (colorString === 'orange') {
//         alert("Orange is my favorite color!")
//     } else if (colorString === 'yellow') {
//         alert("Yellow is the color of the sun.")
//     } else if (colorString === 'green') {
//         alert("It is fun to jump around in green grass!")
//     } else if (colorString === 'blue') {
//         alert("The sky is blue.")
//     } else if (colorString === 'indigo') {
//         alert("Hmmm...I don't have much to say about the color indigo.")
//     } else if (colorString === 'violet') {
//         alert("Violet is such a happy color!")
//     } else {
//         alert("Oops! That color isn't one of our defined colors!")
//     }
// }

// console.log(analyzeColor('indigo'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(colorString) {
//
//     switch (colorString) {
//         case 'red':
//             alert("Red apples are the tastiest apples!");
//             break;
//         case 'orange':
//             alert("Orange is my favorite color!");
//             break;
//         case 'yellow':
//             alert("Yellow is the color of the sun.");
//             break;
//         case 'green':
//             alert("It is fun to jump around in green grass!");
//             break;
//         case 'blue':
//             alert("The sky is blue.");
//             break;
//         case 'indigo':
//             alert("Hmmm...I don't have much to say about the color indigo.");
//             break;
//         case 'violet':
//             alert("Violet is such a happy color!");
//             break;
//         default:
//             alert("Oops! That color isn't one of our defined colors!");
//             break;
//     }
// }
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var color = prompt("Please enter a color!");
//
// function analyzeColor(colorString) {
// var message;
//
//     switch (colorString) {
//         case 'red':
//             message = "Red apples are the tastiest apples!";
//             break;
//         case 'orange':
//             message = "Orange is my favorite color!";
//             break;
//         case 'yellow':
//             message = "Yellow is the color of the sun.";
//             break;
//         case 'green':
//             message = "It is fun to jump around in green grass!";
//             break;
//         case 'blue':
//             message = "The sky is blue.";
//             break;
//         case 'indigo':
//             message = "Hmmm...I don't have much to say about the color indigo.";
//             break;
//         case 'violet':
//             message = "Violet is such a happy color!";
//             break;
//         default:
//             message = "Oops! That color isn't one of our defined colors!";
//             break;
//     }
//     return alert(message);
// }
//
// analyzeColor(color);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount) {
//
//     switch (luckyNumber) {
//         case 0:
//             discountPercentage = 0;
//             break;
//         case 1:
//             discountPercentage = .10;
//             break;
//         case 2:
//             discountPercentage = .25;
//             break;
//         case 3:
//             discountPercentage = .35;
//             break;
//         case 4:
//             discountPercentage = .5;
//             break;
//         case 5:
//             discountPercentage = 1;
//             break;
//         default:
//             alert("Oops! This isn't a recognized number. Please try again!");
//             break;
//     }
//     var discountedPrice;
//     var discountPercentage;
//     discountedPrice = totalAmount - discountPercentage * totalAmount;
//
//     return alert("Your new discounted price is $" + discountedPrice.toFixed(2) + "! How lucky!");
//
//     }
//
// console.log(calculateTotal(1, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("Please enter the total amount of your bill.");

function calculateTotal(luckyNumber, totalBill) {

    switch (luckyNumber) {
        case 0:
            discountPercentage = 0;
            break;
        case 1:
            discountPercentage = .10;
            break;
        case 2:
            discountPercentage = .25;
            break;
        case 3:
            discountPercentage = .35;
            break;
        case 4:
            discountPercentage = .5;
            break;
        case 5:
            discountPercentage = 1;
            break;
        default:
            alert("Oops! This isn't a recognized number. Please try again!");
            break;
    }
    var priceBeforeDiscount = parseFloat(totalBill).toFixed(2);
    var discountedPrice;
    var discountPercentage;
    discountedPrice = totalBill - discountPercentage * totalBill;
    alert("Your lucky number was " + luckyNumber + ".");
    alert("Your price before the discount was $" + priceBeforeDiscount +".");
    return alert("Your new discounted price is $" + discountedPrice.toFixed(2) + "! How lucky!");

}

calculateTotal(luckyNumber, totalBill);

