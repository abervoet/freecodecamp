/*  https://www.freecodecamp.com/challenges/missing-letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

// solution with regexp
function fearNotLetter(str) {
    var result = '';
    var charsToExclude = new RegExp('[^' + str + ']', 'g');

    for (var i = 0; result[allChars.length - 1] !== str[str.length - 1]; i++)  // while last letter of str is not reached
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

    var match = result.match(charsToExclude);

    return match ? match.join('') : undefined;
}

// solution with map
function fearNotLetter(str) {
    var compare = str.charCodeAt(0), missing;

    str.split('').map(function (letter, index) {
        if (str.charCodeAt(index) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });

    return missing;
}

// basic solution
function fearNotLetter(str) {
    for (var i = 1; i < str.length; i++) {
        var currCharCode = str.charCodeAt(i);
        var prevCharCode = str.charCodeAt(i - 1);

        if (currCharCode - prevCharCode > 1) {
            return String.fromCharCode(prevCharCode + 1); //modify here to build list if there are more than 1 letter missing
        }
    }
}

fearNotLetter("abce");

/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/