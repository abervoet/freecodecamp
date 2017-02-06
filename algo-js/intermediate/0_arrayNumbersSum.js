/*  https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

// math solution:  sum([n...m]) = (m-n+1)*(n+m)/2
function sumAll(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var result = (max - min + 1) * (min + max) / 2;
    return result;
}

// basic solution, iterative sum with ES6 array syntax
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}

// basic solution, iterative sum
function sumAll(arr) {
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    var total = 0;
    for (var i = min; i <= max; i++) {
        total += i;
    }

    return total;
}

sumAll([1, 4]);

/*

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.

*/