/*      https://www.freecodecamp.com/challenges/diff-two-arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/

// best solution for this case (2 arrays)
function diffArray(arr1, arr2) {
    return arr1.filter(function (x) {
        return !arr2.includes(x); // same as arr2.indexOf(x) === -1
    }).concat(arr2.filter(function (x) {
        return !arr1.includes(x)
    }));
}

//  concat + filter (exclude)
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(function (item) {
        return !arr1.includes(item) || !arr2.includes(item)
    });
}

// plain js solution
function diffArray(arr1, arr2) {
    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {  // arr1 elements that do not exist in arr2
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }

    for (var j = 0; j < arr2.length; j++) {  // arr2 elements that do not exist in arr1
        if (arr1.indexOf(arr2[j]) === -1) {
            newArr.push(arr2[j]);
        }
    }

    return newArr;
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
    ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
    [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
    [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
    [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
    [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/
