/* BAsic */
/* 
var num = 12.3552

var result1 = Math.floor(num);
var result2 = Math.ceil(num);
var result4 = Math.round(num);
var result3 = Math.random();

 */

function dice() {
    var randomNumber = Math.random()*6;
    var output = Math.round(randomNumber);
    return output;
}

var yourTrun = dice();

console.log(yourTrun);