function timeConverter(values) {
    var hour = Math.floor(values / 60);
    var miniute = values % 60;

    return hour + ' hours: ' + miniute+" minutes";
}

console.log(timeConverter(458));
console.log(timeConverter(658));