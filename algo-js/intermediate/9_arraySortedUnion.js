/*  https://www.freecodecamp.com/challenges/sorted-union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

// solution with filter 
function uniteUnique() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]) {
        concatArr = concatArr.concat(arguments[i]); i++;
    }
    uniqueArray = concatArr.filter(function (item, pos) {
        return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
}

// solution with reduce
function uniteUnique() {
    var newArr;
    var args = Array.from(arguments);

    newArr = args.reduce(function (arrA, arrB) {
        return arrA.concat(arrB.filter(function (i) {
            return arrA.indexOf(i) === -1;
        }));
    });

    return newArr;
}

// basic solution O(n*m)
function uniteUnique() {
    var result = [];

    for (var i = 0; i < arguments.length; i++) {
        var argArr = arguments[i];

        for (var j = 0; j < argArr.length; j++) {
            var indexValue = argArr[j];

            if (result.indexOf(indexValue) < 0) {
                result.push(indexValue);
            }
        }
    }

    return result;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/