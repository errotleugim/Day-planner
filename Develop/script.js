var cdate = $("#currentDay");
function fecha() {
var fecha = moment().format("MMM DD, YYYY");
cdate.text(cdate);
}
setInterval(fecha, 10000);
console.log(cdate);