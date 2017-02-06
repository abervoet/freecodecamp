/*      https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

// one line solution
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

// solution with map and reduce - assume we have only positive numbers sequences.
function largestOfFour(arr) {
    return arr.map(function (subArr) {
        return subArr.reduce(function (max, current) {
            return Math.max(max, current);
        }, 0);
    });
}


// plain js solution - assume we have only positive numbers sequences.
function largestOfFour(arr) {
    var max = [];
    for (var i = 0; i < arr.length; i++) {
        var tmpMax = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > tmpMax)
                tmpMax = arr[i][j];
        }
        max.push(tmpMax);
    }
    return max;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

*/