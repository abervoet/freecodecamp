/* https://www.freecodecamp.com/challenges/sum-all-primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/

//source: http://stackoverflow.com/questions/21966000/need-to-generate-prime-numbers-in-java-script

function prime(n, flag) {
    (typeof flag === "undefined" || flag === false) ? flag = false : flag = true;

    function isPrime(num) {
        if (num === 0 || num === 1) {
            return false;
        }
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    if (flag) {
        var arr = [2];
        for (var i = 3; i <= n; i += 2) {
            if (isPrime(i)) {
                arr.push(i);
            }
        }
        return arr;
    } else {
        return isPrime(n);
    }
}

function sumPrimes(number) {
    var sum = prime(number, true).reduce(function (val, curr) {
        return val += curr;
    }, 0);
    return sum;
}

sumPrimes(10);


/*
    sumPrimes(10) should return a number.
    sumPrimes(10) should return 17.
    sumPrimes(977) should return 73156.
*/