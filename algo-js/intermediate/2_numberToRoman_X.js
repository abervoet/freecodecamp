/*  https://www.freecodecamp.com/challenges/roman-numeral-converter

Convert the given number into a roman numeral.  http://www.mathsisfun.com/roman-numerals.html
All roman numerals answers should be provided in upper-case.

*/

//copied from: mathsisfun

function Level(i, v, x) {
    this.i = i;
    this.v = v;
    this.x = x;
}
var levels = [];
levels[0] = new Level('I', 'V', 'X');
levels[1] = new Level('X', 'L', 'C');
levels[2] = new Level('C', 'D', 'M');

function calcDigit(d, l) {
    if (l > 2) {
        var str = '';
        for (var m = 1; m <= d * Math.pow(10, l - 3); m++)
            str += 'M';
        return str;
    } else if (d == 1)
        return levels[l].i;
    else if (d == 2)
        return levels[l].i + levels[l].i;
    else if (d == 3)
        return levels[l].i + levels[l].i + levels[l].i;
    else if (d == 4)
        return levels[l].i + levels[l].v;
    else if (d == 5)
        return levels[l].v;
    else if (d == 6)
        return levels[l].v + levels[l].i;
    else if (d == 7)
        return levels[l].v + levels[l].i + levels[l].i;
    else if (d == 8)
        return levels[l].v + levels[l].i + levels[l].i + levels[l].i;
    else if (d == 9)
        return levels[l].i + levels[l].x;
    else
        return '';
}

function convertToRoman(num) {
    var r = '';
    var strNum = num.toString();
    for (var c = 0; c < strNum.length; c++)
        r += calcDigit(strNum[c], strNum.length - c - 1);
    return r;
}

convertToRoman(36);


/*
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/