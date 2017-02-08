/*      https://www.freecodecamp.com/challenges/exact-change
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.
    // Example cash-in-drawer array:
    // [["PENNY", 1.01],
    // ["NICKEL", 2.05],
    // ["DIME", 3.10],
    // ["QUARTER", 4.25],
    // ["ONE", 90.00],
    // ["FIVE", 55.00],
    // ["TEN", 20.00],
    // ["TWENTY", 60.00],
    // ["ONE HUNDRED", 100.00]]

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

// solution with reduce
var denom = [
    { name: 'ONE HUNDRED', val: 100.00 },
    { name: 'TWENTY', val: 20.00 },
    { name: 'TEN', val: 10.00 },
    { name: 'FIVE', val: 5.00 },
    { name: 'ONE', val: 1.00 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.10 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    var change = cash - price;

    var register = cid.reduce(function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });

    if (register.total === change) return 'Closed';
    if (register.total < change) return 'Insufficient Funds';

    var change_arr = denom.reduce(function (acc, curr) {
        var value = 0;
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);

    if (change_arr.length < 1 || change > 0) return "Insufficient Funds";

    return change_arr;
}



// plain js solution
var unitaryValues = {
    "ONE HUNDRED": 100, "TWENTY": 20, "TEN": 10, "FIVE": 5, "ONE": 1,
    "QUARTER": 0.25, "DIME": 0.10, "NICKEL": 0.05, "PENNY": 0.01
};
function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var totalCash = 0;

    // calculate total cash
    for (var x = 0; x < cid.length; x++) {
        totalCash += cid[x][1];
    }
    totalCash = Math.round(totalCash * 100) / 100; // round to 2 digits

    // calculate total cash, with reduce
    // var totalCash = cid.reduce(function(sum, curr) {
    //     return sum += curr[1];
    // }, 0);

    // handle premature exits cases
    if (totalCash < change) return "Insufficient Funds";
    if (totalCash === change) return "Closed";

    var i = cid.length; //start iterating from the end (max unitary value -> hundreds) of the drawer

    do { i--; } while (i >= 0 && values[cid[i][0]] > change);    //dive to first money that is lower than change
    while (i >= 0 && cid[i][1] === 0) { i--; }  //then dive to first > 0 value

    var result = [];

    while (change > 0 && i >= 0) { //breaks if change is matched or if we reach end of drawer
        var key = cid[i][0],
            amount = cid[i][1],
            remainder = change % unitaryValues[key],
            changeToAdd = remainder > 0 ? (amount > change ? change - remainder : amount) : change;

        if (changeToAdd > 0) {
            change = Math.round((change - changeToAdd) * 100) / 100;   // round to 2 digits
            cid[i][1] -= changeToAdd; // update drawer entry
            result.push([key, changeToAdd]);
        }

        i--;
    }

    // verify that solution is found with exact change
    if (change > 0) return "Insufficient Funds";

    return result;
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


/*
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".

*/