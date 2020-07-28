"use strict";
const names = [];
// names[0].split(' ');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promise.then(data => {
    // data.split(' ');
});
