"use strict";
// const names: Array<string> = [];
// // names[0].split(' ');
// const promise = new Promise<number>((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });
// promise.then(data => {
//   // data.split(' ');
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
