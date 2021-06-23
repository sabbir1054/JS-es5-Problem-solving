function removeDuplicate(name) {
     var uniqueName = [];
    for (var i = 0; i < name.length; i++){
        var element = name[i];
        var index = uniqueName.indexOf(element);
        if (index == -1) {
            uniqueName.push(element);
        }
    }
    return uniqueName;

}

var result = removeDuplicate([5, 8, 74, 5, 2, 8, 5, 74, 8, 13, 17]);
console.log(result);  