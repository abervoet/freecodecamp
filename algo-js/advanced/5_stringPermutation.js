/*  https://www.freecodecamp.com/challenges/no-repeats-please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

// plain js recursive O(n) solution with heaps permute algorithm
function permAlone(str) {
  var result = 0;  
  
  var checkString = function(str) { // consecutive characters in permutation check
    for(var i = 1; i < str.length; i++) {
      if(str[i] === str[i-1]) return false;
    }
    return true;
  };
  
  var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };

  var heapsPermute = function (str, n) {
    n = n || str.length;
    if (n === 1) {
      if(checkString(str)) result++; // str is a new permutation, increment counter if it is a valid one
    } else {
      for (var i = 1; i <= n; i += 1) {
        heapsPermute(str, n - 1);
        var j = n % 2 === 0 ? 1 : i;
        swap(str, j - 1, n - 1);
      }
    }
  };
  
  heapsPermute(str.split(''));
  
  return result;
}

permAlone('aab');


/*
  permAlone("aab") should return a number.
  permAlone("aab") should return 2.
  permAlone("aaa") should return 0.
  permAlone("aabb") should return 8.
  permAlone("abcdefa") should return 3600.
  permAlone("abfdefa") should return 2640.
  permAlone("zzzzzzzz") should return 0.
  permAlone("a") should return 1.
  permAlone("aaab") should return 0.
  permAlone("aaabb") should return 12.
*/