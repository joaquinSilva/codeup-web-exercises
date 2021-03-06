// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

var person = {
    "firstName": "Joaquin",
    "lastName": "Silva"
    };

console.log(person.firstName);
console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
      return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

// Need to distinguish purchases that are greater than $200 and those that are not;
// Need to use conditionals;
// Need to have a function to calculate a 12% discount;
// Need to return: (0) name of person; (1) amount before discount; (2) discount, if any; and (3) total amount after discount;
// Need to return the values of 0-3 to the browser;

    var shoppers = [
        {"name": 'Cameron', "amount": 180},
        {"name": 'Ryan', "amount": 250},
        {"name": 'George', "amount": 320}
    ];

var discount = function(amountBeforeDiscount) {
    var discountAmount = amountBeforeDiscount * .12;
    return parseFloat(discountAmount);
};

function applyDiscount() {
    for (var i = 0; i < shoppers.length; i++) {
        if (shoppers[i].amount > 200) {
            shoppers[i].discountedAmount = shoppers[i].amount - discount(shoppers[i].amount);
        } else {
            shoppers[i].discountedAmount = parseFloat(shoppers[i].amount);
        }
    }
}

function displayData() {
    for (var i = 0; i < shoppers.length; i++) {
        console.log(shoppers[i].name + " purchased $" + shoppers[i].amount.toFixed(2) + ", has a discount of $" + discount(shoppers[i].amount).toFixed(2) + ", and has a total discounted price of $" + shoppers[i].discountedAmount.toFixed(2) + ".");
    }
}

applyDiscount();
displayData(shoppers);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

var books = [
        {
            "title": "The Great Gatsby",
            "author":
                {
                 "firstName": "F. Scott",
                 "lastName": "Fitzgerald"
                }
        },
        {
            "title": "The Grapes of Wrath",
            "author":
                {
                    "firstName": "John",
                    "lastName": "Steinbeck"
                }
        },
        {
            "title": "1984",
            "author":
                {
                    "firstName": "George",
                    "lastName": "Orwell"
                }
        },
        {
            "title": "Ulysses",
            "author":
                {
                    "firstName": "James",
                    "lastName": "Joyce"
                }
        },
        {
            "title": "To Kill a Mockingbird",
            "author":
                {
                    "firstName": "Harper",
                    "lastName": "Lee"
                }
        }
    ];

console.log(books[3].title);
console.log(books[0].author.lastName);
console.log(books[2].author.firstName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

books.forEach(function(element, index) {
    console.log("Book # " + (index + 1) + "\n" + " Title: " + element.title + "\n" + "Author: " + element.author.firstName + " " + element.author.lastName + "\n" + "___");
});


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

function createBook(title, firstName, lastName, array) {
    return array.push(
        {
            "title": title,
            "author":
                {
                    "firstName": firstName,
                    "lastName": lastName
                }
        }
    );
}

// createBook("Lord of the Rings", "J.R.R.", "Tolkien");

// console.log(books);
//
var newBooksArray = [];
createBook("Lord of the Rings", "J.R.R.", "Tolkien", newBooksArray);

// console.log(newBooksArray);

// function showBookInfo(bookObject, array) {
//     return console.log(array[bookObject]);
// }
//
// // showBookInfo(0, newBooksArray);
// //
// // books.forEach(showBookInfo(0,) {
// //     console.log("Book # " + index + " Title: " + element.title + " " + "Author: " + element.author.firstName + " " + element.author.lastName);
// });

// })();
