function find_nearest(num1, num2) {
    if (num1>100 || num2>100) {
        console.log("input valid number between 100");
    } else if (num1 > num2) {
        console.log(num1 +" is most nearest of 100");
    } else {
        console.log(num2+ " is most nearest of 100");
    }
}

find_nearest(58, 63);