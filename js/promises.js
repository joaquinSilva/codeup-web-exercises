"use strict";

function wait(num) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
}

wait(5000).then(() => console.log('You\'ll see this after 5 seconds'));


let githubUserName = 'joaquinSilva';

const getLatestPushEvent = (githubUserName) => {
    fetch(`https://api.github.com/users/${githubUserName}/events/public`,
        {headers: {'Authorization': 'token TOKEN#' }})
        .then(response => response.json()).then(data => {
            const pushEvents = data.filter(event => event.type === 'PushEvent');
            const urlLastCommit = pushEvents[0].payload.commits[0].url;
            getLastCommit(urlLastCommit);
        }
    );
};

const getLastCommit = (url) => {
    fetch(url,
        {headers: {'Authorization': 'token TOKEN#' }})
        .then(response => response.json()).then(data => {
            const commitDate = data.commit.committer.date;
            displayLastCommitDay(commitDate);

        }
    );
};

const displayLastCommitDay = (date) => alert(date);

console.log(getLatestPushEvent(githubUserName));


// refactor with .then() detached from fetches and a return right in front of the fetch:




// console.log(getLastCommit('https://api.github.com/repos/joaquinSilva/codeup-web-exercises/commits/57b4b06cbf0e3b7b979f26c3f49eb07443be2909'));


// var username = prompt("What is your github username");
// how to render the array of commits..need to
// tack on an additional .then() to reach the readable
// data
// What's going on?
//     fetch returns a promise, so we need a .then
// response.body is a readable bitstream, which means we need a second .then to handle the promise resolved when the stream is completely loaded
// fetch('http:///').then(response => response.json()).then(data => console.log(data));