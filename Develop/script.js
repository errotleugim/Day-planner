//Date display
function fecha() {
var fecha = moment().format("dddd, MMMM Do YYYY, HH:mm:ss ");
var cdate = $("#currentDay");
cdate.html(fecha);
}
setInterval(fecha, 1000);
//Populate time blocks on left.
function populate () {
  let nine = moment().startOf('day').add(9,'hours').format("hh:mm")
  var ten = moment().startOf('day').add(10,'hours').format("hh:mm")
  let eleven = moment().startOf('day').add(11,'hours').format("hh:mm")
  let twelve = moment().startOf('day').add(12,'hours').format("hh:mm")
  let thirteen = moment().startOf('day').add(13,'hours').format("hh:mm")
  let fourteen = moment().startOf('day').add(14,'hours').format("hh:mm")
  let fifteen = moment().startOf('day').add(15,'hours').format("hh:mm")
  let sixteen = moment().startOf('day').add(16,'hours').format("hh:mm")
  let seventeen = moment().startOf('day').add(17,'hours').format("hh:mm")

  var first = document.getElementById("hournine");
  first.innerHTML = nine;
  var second = document.getElementById("hourten");
  second.innerHTML = ten;
  var third = document.getElementById("houreleven");
  third.innerHTML = eleven;
  var fourth = document.getElementById("hourtwelve");
  fourth.innerHTML = twelve;
  var fifth = document.getElementById("hourthirteen");
  fifth.innerHTML = thirteen;
  var sixth = document.getElementById("hourfourteen");
  sixth.innerHTML = fourteen;
  var seventh = document.getElementById("hourfifteen");
  seventh.innerHTML = fifteen;
  var eighth = document.getElementById("hoursixteen");
  eighth.innerHTML = sixteen;
  var ninth = document.getElementById("hourseventeen");
  ninth.innerHTML = seventeen;
  
}
populate();
console.log(ten);
//broken functions for saving to local storage. Key is saved, value isnt.
renderLastRegistered();

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






function hours() {
    var kyu = moment().startOf('day').add(9,'hours').format("hh:mm")
    var m = moment().format("hh:mm");

    var nineblock = document.getElementById("nueves");
      if (moment().isAfter(kyu)) {
      nineblock.classList.add('past');
      console.log(nineblock)
    }
    else if (moment().isBefore(kyu)) {
      nineblock.classList.add('future');
      console.log(nineblock);
    }
    
  }
    

hours();
