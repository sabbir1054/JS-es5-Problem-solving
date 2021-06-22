
function getFactorial(n) {
    
 let factorial=1;
    for (let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

var result = getFactorial(5);
console.log(result);

 0

function getFactorial(num) {
    let factorial = 1;
    var i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = getFactorial(10);

console.log(result); 
/*  Solve it with recursive way */
function factorial(n) {
    if (n == 0) {
    return 1;
} else {
    return n * factorial(n - 1);
    }
    
}
var result = factorial(5);
console.log(result);