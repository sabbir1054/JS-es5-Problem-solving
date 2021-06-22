function findSameNumber(arr1, arr2) {
    var result = 0;
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]) {
                result++;
            }
        }
    }
    console.log(result); //return 
}

/* console.log(findSameNumber([1,2,3,4], [1,2,3,4])); */
findSameNumber([1, 2, 3, 4], [1, 2, 3, 4]);