"use strict";

// console.log("Hello from external Javascript");
//
// alert("Welcome to my Website!");
//
// var favoriteColor = prompt("What is your favorite color?");
//
// alert("Great," + " " + favoriteColor + " " + "is my favorite color too!" );

//
// // Movie Rental
// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
//
// var rentalPerDayDollars;
//
// var littleMermaidDays;
// var brotherBearDays;
// var herculesDays;
//
// var totalRentalCost;
//
// totalRentalCost = (littleMermaidDays + brotherBearDays + herculesDays) * rentalPerDayDollars;

var littleMermaidDays = prompt("How many days did you keep the Little Mermaid movie?");
var brotherBearDays = prompt("How many days did you keep the Brother Bear movie?");
var herculesDays = prompt("How many days did you keep the Hercules movie?");

var rentalPerDayDollars = prompt("What is the price per day for a movie?");

var totalRentalCost = (parseFloat(littleMermaidDays) + parseFloat(brotherBearDays) + parseFloat(herculesDays)) * parseFloat(rentalPerDayDollars);

console.log(totalRentalCost);

alert("Great! Your total amount due is" + " " + "$" + totalRentalCost.toFixed(2) + " " + "Please come back soon!");


//
// // Contractor
//
// var googleHourlyRateDollars;
// var amazonHourlyRateDollars;                                                                                                                                                                                                      var amazonHourlyRateDollars;
// var facebookHourlyRateDollars;
//
// var googleHours;
// var amazonHours;
// var facebookHours;
//
// var totalPayment;
//
// totalPayment = googleHours * googleHourlyRateDollars;
// totalPayment += amazonHours * amazonHourlyRateDollars;
// totalPayment += facebookHours * facebookHourlyRateDollars;

//
var googleHourlyRateDollars = parseFloat(prompt("How much does Google pay per hour?"));
var amazonHourlyRateDollars = parseFloat(prompt ("How much does Amazon pay per hour?"));
var facebookHourlyRateDollars = parseFloat(prompt("How much does Facebook pay per hour?"));

var googleHours = parseFloat("How many hours were worked for Google?");
var amazonHours = parseFloat("How many hours were worked for Amazon?");
var facebookHours = parseFloat("How many hours were worked for Facebook?");

var totalGooglePayment = (googleHours * googleHourlyRateDollars);
var totalAmazonPayment = (amazonHours * amazonHourlyRateDollars);
var totalFacebookPayment = (facebookHours * facebookHourlyRateDollars);

var totalPayment = (totalGooglePayment + totalAmazonPayment + totalFacebookPayment);

alert("Awesome! Your total paycheck amount before taxes is $" + " " + totalPayment.toFixed(2) + " " + "Congratulations! You are rich!");



// Student Enrollment
// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
//
//     var classIsFull; // boolean
//     var classSchedulesCheck; // boolean
//     var studentEnrolled = !classFull && classSchedulesCheck;

var classIsFull = confirm('Click "OK" if the class is full and there are no seats left.');
var classSchedulesCheck = confirm('Click "OK" if your schedule has no conflicts with the class schedule.');
var studentEnrolled = !classIsFull && classSchedulesCheck;
alert (studentEnrolled);

// Product Offer
// A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//     Use the following code to follow the instructions below:
//
//     var numberOfItems; // number
//     var offerIsValid; // boolean
//     var isPremiumMember; // boolean
//     var productDiscountApplied = premiumMember || (numberOfItems > 2 && offerValid);


var numberOfItems = parseFloat(prompt("How many items are you buying?"));
var isPremiumMember = confirm('Click "OK" if you are a premium member.');
var offerIsValid =  confirm('Click "OK" if the offer has not expired.');
var productDiscountApplied = (isPremiumMember) || ((numberOfItems > 2) && offerIsValid);
alert(productDiscountApplied);