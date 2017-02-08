/*      https://www.freecodecamp.com/challenges/binary-agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

//  one line solution with ES6 array and map
function binaryAgent(str) {
    return String.fromCharCode(...str.split(" ").map(function (char) { return parseInt(char, 2); }));
}

// one line solution with map
function binaryAgent(str) {
    return str.split(' ').map(function (bVal) {
        return String.fromCharCode(parseInt(bVal, 2));
    }).join('');
}

// solution with for loop
function binaryAgent(str) {
    bStr = str.split(' ');
    uniString = [];

    for (i = 0; i < bStr.length; i++) {
        uniString.push(String.fromCharCode(parseInt(bStr[i], 2)));
    }

    return uniString.join('');
}

// plain js solution with binary algo
function binaryAgent(str) {
    str = str.split(' ');
    var power;
    var decValue = 0;
    var sentence = '';

    // Check each binary number from the array.
    for (var s = 0; s < str.length; s++) {
        // Check each bit from binary number
        for (var t = 0; t < str[s].length; t++) {
            // This only takes into consideration the active ones.
            if (str[s][t] == 1) {
                // This is quivalent to 2 ** position
                power = Math.pow(2, +str[s].length - t - 1);
                decValue += power; // Record the decimal value by adding the number to the previous one.
            }
        }

        // After the binary number is converted to decimal, convert it to string and store
        sentence += (String.fromCharCode(decValue));

        // Reset decimal value for next binary number.
        decValue = 0;
    }

    return sentence;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


/*
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01100110 01110101 01101110 00100001 00111111") 
    should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") 
    should return "I love FreeCodeCamp!"
*/