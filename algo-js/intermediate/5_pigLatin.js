/*      https://www.freecodecamp.com/challenges/pig-latin
Translate the provided string to pig latin.     http://en.wikipedia.org/wiki/Pig_Latin

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

*/

// all-in-one solution with regexp and live construction
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    function isConsonant(char) {
        return !/[aeiouy]/.test(char);
    }

    if (!isConsonant(str.charAt(0))) // first letter is vowel
        return str + "way";

    strArr = str.split("");

    while (isConsonant(strArr[0])) {    // first letter(s) are consomns -> move to end
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }

    return strArr.join("") + "ay";
}

// recursive solution
function translatePigLatin(str) {
    function check(obj) {
        return vowels.indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
    }

    return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}


// step by step basic solution
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var suffixes = { "ay": "ay", "way": "way" };

function getFirstConsonants(str) {
    var result = [];
    var chars = str.split('');
    for (var i = 0; i < chars.length; i++) {
        if (vowels.indexOf(chars[i]) >= 0) {
            return str.substring(0, i);
        }
    }
    return;
}

function translatePigLatin(str) {
    var consonants = getFirstConsonants(str);

    if (consonants) {
        return str.substring(consonants.length).concat(consonants, suffixes.ay);
    }

    return str.concat(suffixes.way);
}

translatePigLatin("consonant");

/*
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/