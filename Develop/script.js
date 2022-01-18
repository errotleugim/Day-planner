//Date display
function fecha() {
var fecha = moment().format("dddd, MMMM Do YYYY, HH:mm:ss ");
var cdate = $("#currentDay");
cdate.html(fecha);
}
setInterval(fecha, 1000);

renderLastRegistered();
var nineam = document.getElementById("#nueve");
var nineamsave = document.querySelector("#ambutton");

function renderLastRegistered() {
    var nine = localStorage.getItem("9AM");
    var nineam = document.getElementById("nueve");
    
    nineam.innerHTML = nine;
  }


nineamsave.addEventListener("click", function(event) {
    event.preventDefault();
    var nineam = document.getElementById("nueve").value;
    console.log(nineam);
    localStorage.setItem("9AM", nineam);
})



var m = moment();
function kuji() {
    var kyu = moment().startOf('day').add(9,'hours').format("hh:mm")
   var m = moment();
   console.log(m.isbefore.m);
        

}
kuji();