/*
/*  https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

/* reduce method */
function sumFibs(num) {
    var fibs = [1];
    for (var i = 1; i <= num;) { // build fibs sequence
        fibs.push(i);
        i = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    }

    return fibs.reduce(function (val, curr) {   // sum odd entries of sequence with reduce
        return curr % 2 !== 0 ? val + curr : val;
    }, 0);
}

/* basic iterative method */
function sumFibs(num) {
    var sum = 2, prev = 1, curr = 1, next = 2;

    while (next <= num) {
        prev = curr;
        curr = next;
        next = prev + curr;

        if (curr % 2 !== 0) {
            sum += curr;
        }
    }
    return sum;
}


sumFibs(4);

/*
    sumFibs(1) should return a number.
    sumFibs(1000) should return 1785.
    sumFibs(4000000) should return 4613732.
    sumFibs(4) should return 5.
    sumFibs(75024) should return 60696.
    sumFibs(75025) should return 135721.
*/