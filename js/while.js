"use strict";

var i = 2;

while (i <= 65536) {
    console.log(i);
    i = i * 2;
}






my first incomplete attempt
var totalCones = Math.floor(Math.random() * 50) + 50;

do {
   var singleCustomerOrder = Math.floor(Math.random() * 5) + 1;
    var remainingCones;
    if (remainingCones === 0) {
        console.log("Yay! I sold them all!");
        break;
    }
    if (remainingCones < singleCustomerOrder) {
        console.log("I cannot sell you " + singleCustomerOrder + " cones when I only have " + remainingCones + " cones left." );
        continue;
    }

    console.log(singleCustomerOrder + " cones sold.");
    var remainingCones = totalCones - singleCustomerOrder;
} while(totalCones > 0);


// solution from teacher:
console.log("It's a great day at the ice cream selling stand!");
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " number of cones to sell everybody!");


var conesOrdered;
do {
    // simulate a customer ordering between 1-5 cones
    // if I have enough cones for them, I sell them that many cones
    // if I don't have enough cones for that customer, I move on to the next customer
    conesOrdered = Math.ceil(Math.random() * 5);
    console.log("The next customer ordered " + conesOrdered + " number of cones.");
    if(conesOrdered <= allCones) {
        allCones = allCones - conesOrdered;
        console.log("I now have " + allCones + " left.");
    } else {
        console.log("I'm sorry for you because I don't have enough cones for you. Next customer please!");
    }

} while(allCones > 0);

console.log("Yay! I sold all the cones and get to go home!");