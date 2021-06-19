function check_char(str1, char) {
  ctr = 0;
  for (let i = 0; i < str1.length; i++){
    if ((str1.charAt(i) === char)) {
      ctr = 1;
      break;
    }
  }
  if (ctr == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(check_char("Khan", "a"));
console.log(check_char("Sbbir", "a"));