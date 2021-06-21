function halv_array_swap(iarra) {
    if (((iarra.length) % 2) != 0) {
        return false;
    } else {
        for (var i = 0; i < iarra.length / 2; i++){
            var temp = iarra[i];
            iarra[i] = iarra[i+iarra.length/2];
            iarra[i + iarra, length / 2] = temp;

        }
        return iarra;
    }
}

console.log(halv_array_swap([1, 3, 5, 4, 6, 2]));
console.log(halv_array_swap([1, 3, 5, 4, 2]));


