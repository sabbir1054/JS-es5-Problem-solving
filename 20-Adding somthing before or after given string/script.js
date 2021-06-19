function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(6 ,0) === "Sabbir") {
        return str1;
    }
    return "Sabbir" + str1;
}

console.log(string_check(" Hossain"));


/* /********************************//////////// */ */

function string_check2(str2) {
    if (str2 === null || str2 === undefined || str2.substring(6 ,0) === "Hossain") {
        return str2;
    }
    return  str2 + "Hossin";
}

console.log(string_check2("Sabbir "));