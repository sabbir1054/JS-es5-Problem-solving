/* For better learning */

//Fibo.Serise = 0,1,1,2,3,5,8,13,21,34

//fibo[2]=fibo[2-1]+fibo[2-2]/*2 is index number*/
//fibo[3-2]=fibo[3-1]+fibo[3-2]
//fibo[4-2]=fibo[4-1]+fibo[4-2]
//fibo[32]=fibo[32-1]+fibo[32-2]


var fibo = [0, 1];
for (var i = 2; i <= 12; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);


/* now practice with function*/

function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var result = fibonacci(10);
console.log(result);
 

/* With recursive way */

function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
       //calculate array with nth element 
        var fibo = fibonacci(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(12);
console.log(result);