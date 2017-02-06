/*      https://www.freecodecamp.com/challenges/mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

// array.every solution
function mutation(arr) {
    return arr[1].toLowerCase().split('')
        .every(function (c) {
            return arr[0].toLowerCase().indexOf(c) != -1;
        });
}

// basic solution
function mutation(arr) {
    var str1 = arr[0].toLowerCase();
    var str2 = arr[1].toLowerCase();
    for (var i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) < 0) {
            return false;
        }
    }

    return true;
}

mutation(["hello", "hey"]);

/*
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
*/