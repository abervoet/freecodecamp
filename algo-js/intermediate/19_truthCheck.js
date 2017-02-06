/*      https://www.freecodecamp.com/challenges/everything-be-true
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/

// solution with reduce
function truthCheck(collection, pre) {
    return collection.reduce(function (result, curr) {
        return curr[pre] ? result : false;
    }, true);
}

// basic solution with array.every
function truthCheck(collection, pre) {
    return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}

// basic solution with for loop and prop check
function truthCheck(collection, pre) {
    for (var i = 0; i < collection.length; i++) {
        if (!(collection[i].hasOwnProperty(pre) && collection[i][pre]))
            return false;
    }
    return true;
}

// solution with match counter
function truthCheck(collection, pre) {
    var counter = 0;
    for (var c in collection) {
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    return counter == collection.length;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");

/*
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
truthCheck([{"single": "yes"}], "single") should return true
truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false

*/