function last_digit(num1, num2, num3) {
  if ((num1 > 0) && (num2 > 0) && (num3 > 0)) {
    return (num3 % 10 == num2 % 10 && num2 % 10 == num3 % 10 && num1 % 10 == num3 % 10);
  } else {
    return false;
  }
}
console.log(last_digit(400,685,522));
console.log(last_digit(122,322,422));
console.log(last_digit(10,50,25));
