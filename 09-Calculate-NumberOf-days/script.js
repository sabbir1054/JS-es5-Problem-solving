const num = Math.ceil(Math.random() * 10);

const guessNum = prompt("guess the number between 0 to 10");
if (guessNum > 10) {
    console.log("Put valid number");
}
else if (guessNum === num) {
    console.log("Matched");
}
else {
    console.log("Not Matched random number is "+ num);
}