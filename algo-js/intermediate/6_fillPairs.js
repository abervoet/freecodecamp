/*  https://www.freecodecamp.com/challenges/dna-pairing
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
http://en.wikipedia.org/wiki/Base_pair

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

var pairs = { "A": "T", "T": "A", "G": "C", "C": "G" };

// solution with map
function pairElement(str) {
    return str.split('').map(function (elem) {
        return [elem, pairs[elem]];
    });
}

// solution with plain js
function pairElement(str) {
    var items = str.split('');

    for (var i = 0; i < strArr.length; i++) {
        items[i] = [strArr[i], pairs[strArr[i]]];
    }
    return items;
}

pairElement("GCG");


/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/