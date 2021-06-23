function findLargeNum(num1, num2, num3) {

    if (num1 > num2 && num1>num3) {
        return "Num1 is bigger";
    } else if (num2 > num1 && num2 > num3) {
        return "Num2 is bigger";
    } else {
        return "Num3 is bigger";
    }
}
var result = findLargeNum(854, 1587, 11364);
console.log(result);
 

/*  Second way */

function findLarge(num1, num2, num3) {

    var max = Math.max(num1, num2, num3);
    return max;
}

var result = findLarge(854, 1587, 11364);
console.log(result);