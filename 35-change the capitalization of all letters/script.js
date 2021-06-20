function change_case(text) {
    var str1 = "";
    for (var i = 0; i < text.length; i++){
        if (/[A-Z]/.test(text[i])) {
            str1 += text[i].toLowerCase();
        }
        else {
            str1 += text[i].toUpperCase();
        }

    }
    return str1;
}

console.log(change_case("Sabbir"));