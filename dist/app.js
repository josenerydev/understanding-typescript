"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Max');
// user1.name = 'Manu';
user1.greet(' Hi there - I am');
console.log(user1);
//# sourceMappingURL=app.js.map