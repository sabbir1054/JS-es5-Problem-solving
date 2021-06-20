function vowel_count(str) {
    return str.replace(/[^aeiou]/g, "").length;
}
console.log(vowel_count("Hi I am Sabbir Hossain"));
console.log(vowel_count("Quick broun fox jumps "));