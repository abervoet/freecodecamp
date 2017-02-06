/*  https://www.freecodecamp.com/challenges/drop-it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

*/

// solution with while and shift on the array passed and returned
function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// solution with slice and findIndex function
function dropElements(arr, func) {
    var index = arr.findIndex(func);
    return arr.slice(index >= 0 ? index : arr.length, arr.length);
}

// solution with same array result shifting
function dropElements(arr, func) {
    var times = arr.length;
    for (var i = 0; i < times; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }
    return arr;
}

// plain js solution with copy result
function dropElements(arr, func) {
    var result = [];

    for (var i = 0, keep = false; i < arr.length; i++) {
        keep = keep || func(arr[i]);
        if (keep === true) {
            result.push(arr[i]);
        }
    }

    return result;
}

// todo: plain js with same array returned filtered


dropElements([1, 2, 3], function (n) { return n < 3; });

/*
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

*/