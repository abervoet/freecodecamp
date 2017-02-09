/*  https://www.freecodecamp.com/challenges/spinal-tap-case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

// alternative solution
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');   // low-upper to low-space-upper
  return str.toLowerCase().split(/(?:_| )+/).join('-'); //split whitespace or underscore then join with dash
}

// basic solution
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2'); // low-upper to low-space-upper
  return str.replace(/\s+|_+/g, '-').toLowerCase();   // white space or underscore  
}

spinalCase('This Is Spinal Tap');

/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/
