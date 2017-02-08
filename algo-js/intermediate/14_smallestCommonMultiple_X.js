/*      https://www.freecodecamp.com/challenges/smallest-common-multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

https://www.mathsisfun.com/least-common-multiple.html

*/

// function range(start, stop, step) {
//     var a = [start], b = start;
//     while (b < stop) { b += step; a.push(b) }
//     return a;
// };

function smallestCommons(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var candidate = max;

    var smallestCommon = function (low, high) {
        function scm(l, h) {
            if (h % l === 0) {
                return h;
            } else {
                return scm(l, h + high);
            }
        }
        return scm(low, high);
    };

    for (var i = min; i <= max; i += 1) {
        candidate = smallestCommon(i, candidate);
    }

    return candidate;
}

smallestCommons([1, 5]);

/*
    smallestCommons([1, 5]) should return a number.
    smallestCommons([1, 5]) should return 60.
    smallestCommons([5, 1]) should return 60.
    smallestCommons([1, 13]) should return 360360.
    smallestCommons([23, 18]) should return 6056820.
*/