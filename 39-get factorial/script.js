
function getFactorial(n) {
    
 let factorial=1;
    for (let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

var result = getFactorial(5);
console.log(result);

 

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
