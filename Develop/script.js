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
  let ten = moment().startOf('day').add(10,'hours').format("hh:mm")
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

//Creates variable for each button.
//There is probaby better ways to do this, but time is of the essence.
nineamsave = document.getElementById("nineambutton");
tenamsave = document.getElementById("tenambutton");
elevenamsave = document.getElementById("elevenambutton");
twelvepmsave = document.getElementById("twelvepmbutton");
onepmsave = document.getElementById("onepmbutton");
twopmsave = document.getElementById("twopmbutton");
threepmsave = document.getElementById("threepmbutton");
fourpmsave = document.getElementById("fourpmbutton");
fivepmsave = document.getElementById("fivepmbutton");

renderLastRegistered();

function renderLastRegistered() {
    var nine = localStorage.getItem("9AM")|| "";
    var nineam = document.getElementById("nueve");
    var ten = localStorage.getItem("10AM")
    var tenam = document.getElementById("diez");
    var eleven = localStorage.getItem("11AM");
    var elevenam = document.getElementById("once");
    var twelve = localStorage.getItem("12PM");
    var twelvepm = document.getElementById("doce");
    var one = localStorage.getItem("1PM");
    var onepm = document.getElementById("trece");
    var two = localStorage.getItem("2PM");
    var twopm = document.getElementById("catorce");
    var three = localStorage.getItem("3PM");
    var threepm = document.getElementById("quince");
    var four = localStorage.getItem("4PM");
    var fourpm = document.getElementById("dieciseis");
    var five = localStorage.getItem("5PM");
    var fivepm = document.getElementById("diecisiete");

    nineam.value = nine;
    tenam.value = ten;
    elevenam.value = eleven;
    twelvepm.value = twelve;
    onepm.value = one;
    twopm.value = two;
    threepm.value = three;
    fourpm.value = four;
    fivepm.value = five;
  }
nineamsave.addEventListener("click", function(event) {
    event.preventDefault();
    var nineam = document.getElementById("nueve").value;

    localStorage.setItem("9AM", nineam);
})

tenamsave.addEventListener("click", function(event) {
  event.preventDefault();
  var tenam = document.getElementById("diez").value;
  
  localStorage.setItem("10AM", tenam);
})

elevenamsave.addEventListener("click", function(event) {
  event.preventDefault();
  var elevenam = document.getElementById("once").value;

  localStorage.setItem("11AM", elevenam);
})

twelvepmsave.addEventListener("click", function(event) {
  event.preventDefault();
  var twelvepm = document.getElementById("doce").value;
  
  localStorage.setItem("12PM", twelvepm);
})

onepmsave.addEventListener("click", function(event) {
  event.preventDefault();
  var onepm = document.getElementById("trece").value;
  
  localStorage.setItem("1PM", onepm);
})

twopmsave.addEventListener("click", function(event) {
  event.preventDefault();
  var twopm = document.getElementById("catorce").value;

  localStorage.setItem("2PM", twopm);
})

threepmsave.addEventListener("click", function(event) {
  event.preventDefault();
  var threepm = document.getElementById("quince").value;
 
  localStorage.setItem("3PM", threepm);
})

fourpmsave.addEventListener("click", function(event) {
  event.preventDefault();
  var fourpm = document.getElementById("dieciseis").value;

  localStorage.setItem("4PM", fourpm);
})

fivepmsave.addEventListener("click", function(event) {
  event.preventDefault();
  var fivepm = document.getElementById("diecisiete").value;

  localStorage.setItem("5PM", fivepm);
})


//Attempting colorchange function

function hours() {
   var nineblock = document.querySelector("#kyu");
   var tenblock = document.querySelector("#ju");  
   var elevenblock = document.querySelector("#juichi");
   var twelveblock = document.querySelector("#juni");
   var thirteenblock = document.querySelector("#jusan");
   var fourteenblock = document.querySelector("#juyon");
   var fifteenblock = document.querySelector("#jugo");
   var sixteenblock = document.querySelector("#juroku");
   var seventeenblock = document.querySelector("#junana");

//9am
      if (moment().isAfter(moment().startOf('day').add(9,'hours'))) {
      nineblock.classList.add('past');
      
    }
    else if (moment().isAfter(moment().startOf('day').add(9,'hours'))) {
      nineblock.classList.add('future');
      
    }
    //10am
    if (moment().isAfter(moment().startOf('day').add(10,'hours'))) {
      tenblock.classList.add('past');
          }
    else if (moment().isAfter(moment().startOf('day').add(10,'hours'))) {
      tenblock.classList.add('future');
          }
   //11am
  if (moment().isAfter(moment().startOf('day').add(11,'hours'))) {
      elevenblock.classList.add('past');
          }
    else if (moment().isAfter(moment().startOf('day').add(11,'hours'))) {
      elevenblock.classList.add('future');
          }
    //12pm
  if (moment().isAfter(moment().startOf('day').add(12,'hours'))) {
      twelveblock.classList.add('past');
          }
    else if (moment().isAfter(moment().startOf('day').add(12,'hours'))) {
      twelveblock.classList.add('future');
          }
          //1pm
if (moment().isAfter(moment().startOf('day').add(13,'hours'))) {
      thirteenblock.classList.add('past');
          }
    else if (moment().isAfter(moment().startOf('day').add(13,'hours'))) {
      thirteenblock.classList.add('future');
          }
    //2pm
  if (moment().isAfter(moment().startOf('day').add(14,'hours'))) {
      fourteenblock.classList.add('past');
          }
    else if (moment().isAfter(moment().startOf('day').add(14,'hours'))) {
      fourteenblock.classList.add('future');
  }
  //3pm
  if (moment().isAfter(moment().startOf('day').add(15,'hours'))) {
    fifteenblock.classList.add('past');
        }
  else if (moment().isAfter(moment().startOf('day').add(15,'hours'))) {
    fifteenblock.classList.add('future');
        }
  //4pm
if (moment().isAfter(moment().startOf('day').add(16,'hours'))) {
    sixteenblock.classList.add('past');
        }
  else if (moment().isAfter(moment().startOf('day').add(16,'hours'))) {
    sixteenblock.classList.add('future');
}
if (moment().isAfter(moment().startOf('day').add(17,'hours'))) {
  seventeenblock.classList.add('past');
      }
else if (moment().isAfter(moment().startOf('day').add(17,'hours'))) {
  seventeenblock.classList.add('future');
}
}
hours();
