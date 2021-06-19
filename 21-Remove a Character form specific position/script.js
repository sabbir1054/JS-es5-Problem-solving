function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 );

}

console.log(remove_character("Python",0));// here remove p
console.log(remove_character("Python",3));////here remove h
console.log(remove_character("Muhammad Sabbir",8));//here remove space