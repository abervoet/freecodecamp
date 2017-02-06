/*  https://www.freecodecamp.com/challenges/make-a-person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/

var Person = function (firstAndLast) {
    var fullName, first, last;
    updateObject(firstAndLast);

    function updateObject(firstAndLast) {

        str = firstAndLast.split(" ");
        fullName = firstAndLast;
        first = str[0];
        last = str[1];
    }

    this.getFirstName = function () {
        return first;
    };

    this.getLastName = function () {
        return last;
    };

    this.getFullName = function () {
        return [first, last].join(" ");
    };

    this.setFirstName = function (firstName) {
        first = firstName;
    };

    this.setLastName = function (lastName) {
        last = lastName;
    };

    this.setFullName = function (name) {
        updateObject(name);
    };
};
var bob = new Person('Bob Ross');
bob.getFullName();


var bob = new Person('Bob Ross');
bob.getFullName();
