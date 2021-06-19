function positive_negative(num1, num2) {
    if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
        return true;

    } else {
        return false;
    }
}

console.log(positive_negative(3,-3));
console.log(positive_negative(3,5));