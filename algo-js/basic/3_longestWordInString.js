/* https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

Return the length of the longest word in the provided sentence.

*/

// solution with reduce
function findLongestWord(s) {
    return s.split(' ').reduce(function (max, word) {
        return Math.max(max, word.length)
    }, 0);
}


// basic solution
function findLongestWord(str) {
    var words = str.split(' ');
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength)
            maxLength = words[i].length;
    }

    return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


/* 

findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

*/