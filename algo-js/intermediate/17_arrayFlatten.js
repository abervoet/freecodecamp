/*  https://www.freecodecamp.com/challenges/steamroller

Flatten a nested array. You must account for varying levels of nesting.

*/

// recursive solution with reduce
function steamrollArray(arr) {
    return arr.reduce(function (result, val) {
        return result.concat(Array.isArray(val) ? steamrollArray(val) : val);
    }, []);
}

// recursive basic solution
function steamrollArray(arr) {
    var flattenedArray = [];

    var flatten = function (arg) {
        if (Array.isArray(arg)) {
            for (var a in arg) {
                flatten(arg[a]);
            }
        } else {
            flattenedArray.push(arg);
        }
    };

    arr.forEach(flatten);
    return flattenedArray;
}

// todo: iterative solution

steamrollArray([1, [2], [3, [[4]]]]);

/*  
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/