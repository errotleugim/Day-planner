//Date display
function fecha() {
var fecha = moment().format("dddd, MMMM Do YYYY, h:mm:ss ");
var cdate = $("#currentDay");
cdate.html(fecha);
}
setInterval(fecha, 1000);


