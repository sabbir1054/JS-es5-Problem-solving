function arrayMax(marks) {
    var max = marks[0];
    for (var i = 0; i < marks.length; i++){
        var element = marks[i];
        if (element > max) {
             max = element;
        }
    }
    return max;
}

var result = arrayMax([ 72, 54, 63, 14,98, 59]);
console.log(result);