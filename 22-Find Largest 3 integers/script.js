function max_of_three(num1, num2, num3) {
    if (num1 > num2 && num1>num3) {
        console.log(num1 +' is large number');
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2+ " is large number");
    } else {
        console.log(num3+' is large number');
    }
}

max_of_three(4, 5, 1);
max_of_three(445, 658, 247);
max_of_three(12, 0, -5);