var today = new Date();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();

if (date < 10) {
    date = 0 + date;
}
if (month < 10) {
    month = 0 + month;
}
today = month + "/ " + date + " / " +  year;
console.log(today);

today = date + " / " + month + " / " + year;
console.log(today);