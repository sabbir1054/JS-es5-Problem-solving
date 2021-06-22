function isPrime(n) {
    for (i = 2; i < n; i++){
        if (n % i == 0) {
            return "Not a prime Number"
        }
    return " This is a prime Number"
    }
      
}

var result = isPrime(10);
console.log(result);