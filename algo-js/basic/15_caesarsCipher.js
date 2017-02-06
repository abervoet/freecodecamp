/*    https://www.freecodecamp.com/challenges/caesars-cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

// solution with regexp replace function
//  from stackoverflow : http://stackoverflow.com/questions/617647/where-is-my-one-line-implementation-of-rot13-in-javascript-going-wrong
function rot13(str) {
  return str.replace(/\w/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= "M" ? 13 : -13));
  });
}


//basic solution with map
function rot13(str) {
  return str.split('').map(function (char) {
    x = char.charCodeAt(0);
    if (x < 65 || x > 90) {  // A-Z
      return String.fromCharCode(x);
    }
    else if (x < 78) { // N
      return String.fromCharCode(x + 13);
    }
    return String.fromCharCode(x - 13);
  }).join('');
}

// todo: plain js algo solution

rot13("SERR PBQR PNZC");

/*
rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/