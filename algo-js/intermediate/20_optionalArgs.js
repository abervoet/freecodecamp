/*  https://www.freecodecamp.com/challenges/arguments-optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

// one line ES6 solution with some and reduce
function addTogether() {
    var args = Array.from(arguments);
    return args.some(x => typeof x !== 'number') ? undefined : //if args has any NaN return undefined
        args.length > 1 ? args.reduce((total, curr) => total += curr, 0) :  // else if args has 2 values, reduce to sum
            (n2) => typeof n2 === "number" ? n2 + args[0] : undefined;  // if args has only 1 value, call implicit 2nd func, return sum or undefined
}



// basic js solution
function checkNum(num) {
    return typeof (num) === "number" ? num : undefined;
}

function arrSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var val = checkNum(arr[i]);
        if (val) sum += val;
        else return undefined;
    }
    return sum;
}

function addTogether() {
    if (arguments.length > 1) {
        return arrSum(arguments);
    } else {
        var val = checkNum(arguments[0]);
        if (val) {
            return function (val2) {
                return arrSum([val, val2]);
            };
        } else {
            return undefined;
        }
    }
}

addTogether(2, 3);

/*
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/