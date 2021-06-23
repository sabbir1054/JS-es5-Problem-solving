/* Assignment 01 Feet To Mile */

function feetToMile(feetValue) {
    if (feetValue < 0) {
        console.log("Give valid value");
    } else {
        var perFeet = (1 / 5280); //1mile = 5280 foot
        var  mile= feetValue * perFeet;
    }
    
    return mile;
}

var resultOfMile = feetToMile(20000);
console.log(resultOfMile," mile");


/* Assignment 02 wood calculator */

function woodCalculator(quantityOfChair, quantityOfTable, quantityOfBed) {
 /*    wood For Per
    Chair = 1cc;  Table = 3cc; ForBed = 5cc; */
    var totalWoodForChair = quantityOfChair * 1;
    var totalWoodForTable = quantityOfTable * 3;
    var totalWoodForBed = quantityOfBed * 5;
    var totalWood = (totalWoodForChair + totalWoodForTable + totalWoodForBed);

    return totalWood;

}

var needOfWood = woodCalculator(14, 5, 12);
console.log("You need ", needOfWood, "cc wood");


/* Assignment 03 Brick Calculator */

function brickCalculator(numberOfFloor) {
    /* per feet need 1000 bricks ;
        1-10floor 15 feet ;
        11-20th floor 12 feet; 
        more than 20th 10feet height */
    
    if (numberOfFloor <= 10) {
        var measurementOfFloor = numberOfFloor * 15;
        var totalBricks = measurementOfFloor * 1000;

    }else if (numberOfFloor <= 20) {
        var measurementOfFloor = (15 * 10) + ((numberOfFloor - 10) * 12);
        var totalBricks = measurementOfFloor * 1000;
    }else{
        var measurementOfFloor = (15 * 10) + (12 * 10) + ((numberOfFloor - 20) * 10);
        var totalBricks = measurementOfFloor * 1000;
    }
    return totalBricks;
}

var numberOfTotalBricks = brickCalculator(2);
console.log(numberOfTotalBricks);

