/*  https://www.freecodecamp.com/challenges/wherefore-art-thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). 
Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the property and its value, that was passed on as the second argument.

*/

// solution with filter and reduce
function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function (obj) {
        return srcKeys.reduce(function (res, key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        }, false);
    });
}

// solution with filter and every
function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function (obj) {
        return srcKeys.every(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}

//basic solution with filter and for loop
function whatIsInAName(collection, source) {
    var keyToFinds = Object.keys(source);

    return collection.filter(function (val) {
        for (var i = 0; i < keyToFinds.length; i++) {
            if (!val.hasOwnProperty(keyToFinds[i]) || val[keyToFinds[i]] !== source[keyToFinds[i]]) {
                return false;
            }
        }
        return true;
    });
}

// todo: plain js solution 

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/*
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
*/