/*  https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

// iterative solution
function repeatStringNumTimes(str, num) {
  var result = '';

  while (num > 0) {
    result += str;
    num--;
  }

  return result;
}

// recursive solution
function repeatStringNumTimes(str, num) {
    if (num < 0)
        return "";
    if (num === 1)
        return str;
    else
        return str + repeatStringNumTimes(str, num - 1);
}

// one line solution with string.repeat
function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : "";
}

repeatStringNumTimes("abc", 3);

/*
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "".
*/