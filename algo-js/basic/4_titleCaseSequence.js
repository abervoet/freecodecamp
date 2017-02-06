/*  https://www.freecodecamp.com/challenges/title-case-a-sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

// solution with regexp
function titleCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
    return L.toUpperCase();
  });
}

// solution with array.map
function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  var result = words.map(function (w) {
    return w.charAt(0).toUpperCase().concat(w.substr(1));
  });
  return result.join(" ");
}


// solution in plain js
function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  var charToCapitalize;

  for (var i = 0; i < words.length; i++) {
    charToCapitalize = words[i].charAt(0);
    // words[i] = words[i].replace(charToCapitalize, charToCapitalize.toUpperCase()); // works only if first letter is not present elsewhere in word
    words[i] = words[i].charAt(0).toUpperCase().concat(words[i].substr(1));
  }

  return words.join(' ');
}

titleCase("I'm a little tea pot");


titleCase("I'm a little tea pot");

/*

titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt") should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".

*/