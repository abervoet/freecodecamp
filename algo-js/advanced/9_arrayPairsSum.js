/*  https://www.freecodecamp.com/challenges/pairwise

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, 
return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. 
We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/

// a good solution would have been to sort elements from lowest to highest, then exclude numbers higher than arg,
// then iterating only once to find remainders (arg - item) that would have optimized a bit the solution.
// but we can't because of returned result constraint that is index based

// O(n) solution with reduce, look for remainder in array while iterating on each element, 
// then disable found items by setting them to NaN so they cant be used again
function pairwise(arr, arg) {
    return arr.reduce(function (total, currItem, currIndex) {
        var remainder = arg - currItem;
        var remainderIndex = arr.indexOf(remainder);
        if (remainderIndex != -1 && remainderIndex != currIndex) {
            var found = currIndex + remainderIndex;
            arr.splice(currIndex, 1, NaN);
            arr.splice(remainderIndex, 1, NaN);
            return total + found;
        }
        return total;
    }, 0);
}

//todo: O(n) solution with plain js, look for remainder in array while iterating on each element, 
// then disable found items by setting them to NaN so they cant be used again
function pairwise(arr, arg) {
    var res = 0;
   
    return res;
}

// bruteforce solution O(n!) very bad -> iterate on each element (arr[i...n]) then on rest of the list (arr[1+1...n]) to find pair
function pairwise(arr, arg) {
    var res = 0;

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == arg) {
                res += i + j;
                arr[i] = arr[j] = NaN;
            }
        }
    }
    return res;
}
pairwise([1, 4, 2, 3, 0, 5], 7);


/*
pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
pairwise([1, 3, 2, 4], 4) should return 1.
pairwise([1, 1, 1], 2) should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
pairwise([], 100) should return 0.
*/