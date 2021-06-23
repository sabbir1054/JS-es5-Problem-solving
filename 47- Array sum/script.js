function sumOfArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var result = sumOfArray([10, 15, 17, 1, 9, 1, 6, 1, 125]);
console.log(result);