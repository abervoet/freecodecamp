/*    https://www.freecodecamp.com/challenges/factorialize-a-number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 
*/

// recursive solution
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  
  return num * factorialize(num - 1);
}

// todo: iterative solution

factorialize(5);


/*
  factorialize(5) should return a number.
  factorialize(5) should return 120.
  factorialize(10) should return 3628800.
  factorialize(20) should return 2432902008176640000.
  factorialize(0) should return 1.
*/