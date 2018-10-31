"use strict";



const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis437829382@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object
// has at least 3 languages in the languages array.

let polyglot = users.filter(user => user.languages.length > 2);
console.log(polyglot);

// Use .map to create an array of strings where each element is a user's email address

const emailArray = users.map(user => user.email);

console.log(emailArray);
// Use reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

console.log(totalYears);

const averageYearsExperience = (totalYears/users.length);
console.log(averageYearsExperience);

// Use reduce to get the longest email from the list of users.
//
// splice
const longestEmail = users.reduce((output, user) => {
    if (user.email.length > output.length) {
        output = user.email;
    }
    return output
}, '');

console.log(longestEmail);

// Use reduce to get the list of user's names in a single string.' +
// 'Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructors = users.reduce((fullString, user) => {
    return fullString + `${user.name}, `;
}, '');

instructors = instructors.substring(0, instructors.length-2) + ".";

console.log(instructors);
// BONUS: Use reduce to get the unique list of languages from the list of users.
let allLanguages = users.reduce((output, user) => {
    user.languages.map(language => {
        output.push(language);
    });
    return output
}, []);

allLanguages = new Set(allLanguages);
// new Set..."set" are awesome to use!
console.log(allLanguages);