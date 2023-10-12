// Search and Filtering
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

// Close for all Modals
var closeButton = document.getElementsByClassName('closeButton');
var allModals = document.getElementsByClassName('modal');
for (let x = 0; x < closeButton.length; x++) {
  closeButton[x].addEventListener('click', closeModal);
}
function closeModal() {
  for (let x = 0; x < allModals.length; x++) {
    allModals[x].style.display = 'none';
  }
}

//Open for all Modals
var ArgentinaModal = document.getElementById('ArgentinaModal');
var ArgentinaButton = document.getElementById('Argentinabtn');
ArgentinaButton.addEventListener('click', openArgentina);
function openArgentina() {
  ArgentinaModal.style.display = 'block';
}

var BoliviaModal = document.getElementById('BoliviaModal');
var BoliviaButton = document.getElementById('Boliviabtn');
BoliviaButton.addEventListener('click', openBolivia);
function openBolivia() {
  BoliviaModal.style.display = 'block';
}

var BrazilModal = document.getElementById('BrazilModal');
var BrazilButton = document.getElementById('Brazilbtn');
BrazilButton.addEventListener('click', openBrazil);
function openBrazil() {
  BrazilModal.style.display = 'block';
}

var ChileModal = document.getElementById('ChileModal');
var ChileButton = document.getElementById('Chilebtn');
ChileButton.addEventListener('click', openChile);
function openChile() {
  ChileModal.style.display = 'block';
}

var ColombiaModal = document.getElementById('ColombiaModal');
var ColombiaButton = document.getElementById('Colombiabtn');
ColombiaButton.addEventListener('click', openColombia);
function openColombia() {
  ColombiaModal.style.display = 'block';
}

var EcuadorModal = document.getElementById('EcuadorModal');
var EcuadorButton = document.getElementById('Ecuadorbtn');
EcuadorButton.addEventListener('click', openEcuador);
function openEcuador() {
  EcuadorModal.style.display = 'block';
}

var GuyanaModal = document.getElementById('GuyanaModal');
var GuyanaButton = document.getElementById('Guyanabtn');
GuyanaButton.addEventListener('click', openGuyana);
function openGuyana() {
  GuyanaModal.style.display = 'block';
}

var ParaguayModal = document.getElementById('ParaguayModal');
var ParaguayButton = document.getElementById('Paraguaybtn');
ParaguayButton.addEventListener('click', openParaguay);
function openParaguay() {
  ParaguayModal.style.display = 'block';
}

var PeruModal = document.getElementById('PeruModal');
var PeruButton = document.getElementById('Perubtn');
PeruButton.addEventListener('click', openPeru);
function openPeru() {
  PeruModal.style.display = 'block';
}

var SurinameModal = document.getElementById('SurinameModal');
var SurinameButton = document.getElementById('Surinamebtn');
SurinameButton.addEventListener('click', openSuriname);
function openSuriname() {
  SurinameModal.style.display = 'block';
}

var UruguayModal = document.getElementById('UruguayModal');
var UruguayButton = document.getElementById('Uruguaybtn');
UruguayButton.addEventListener('click', openUruguay);
function openUruguay() {
  UruguayModal.style.display = 'block';
}

var VenezuelaModal = document.getElementById('VenezuelaModal');
var VenezuelaButton = document.getElementById('Venezuelabtn');
VenezuelaButton.addEventListener('click', openVenezuela);
function openVenezuela() {
  VenezuelaModal.style.display = 'block';
}

// Random Modal Generator
var randomBtn = document.getElementById('randomButton');
randomBtn.addEventListener('click', openRandomModal);
function openRandomModal() {
  allModals[(Math.floor(Math.random() * allModals.length))].style.display = 'block';
}