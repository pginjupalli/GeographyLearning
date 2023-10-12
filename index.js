
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

// Random Modal Generator
var randomBtn = document.getElementById('randomButton');
randomBtn.addEventListener('click', openRandomModal);
function openRandomModal() {
  allModals[(Math.floor(Math.random() * allModals.length))].style.display = 'block';
}

//Open for all Modals
var AustraliaModal = document.getElementById('AustraliaModal');
var AustraliaButton = document.getElementById('australiabtn');
AustraliaButton.addEventListener('click', openAustralia);
function openAustralia() {
  AustraliaModal.style.display = 'block';
}

var BrazilModal = document.getElementById('BrazilModal');
var BrazilButton = document.getElementById('brazilbtn');
BrazilButton.addEventListener('click', openBrazil);
function openBrazil() {
  BrazilModal.style.display = 'block';
}

var CanadaModal = document.getElementById('CanadaModal');
var CanadaButton = document.getElementById('canadabtn');
CanadaButton.addEventListener('click', openCanada);
function openCanada() {
  CanadaModal.style.display = 'block';
}

var ChinaModal = document.getElementById('ChinaModal');
var ChinaButton = document.getElementById('chinabtn');
ChinaButton.addEventListener('click', openChina);
function openChina() {
  ChinaModal.style.display = 'block';
}

var FranceModal = document.getElementById('FranceModal');
var FranceButton = document.getElementById('francebtn');
FranceButton.addEventListener('click', openFrance);
function openFrance() {
  FranceModal.style.display = 'block';
}

var GermanyModal = document.getElementById('GermanyModal');
var GermanyButton = document.getElementById('germanybtn');
GermanyButton.addEventListener('click', openGermany);
function openGermany() {
  GermanyModal.style.display = 'block';
}

var IndiaModal = document.getElementById('IndiaModal');
var IndiaButton = document.getElementById('indiabtn');
IndiaButton.addEventListener('click', openIndia);
function openIndia() {
  IndiaModal.style.display = 'block';
}

var ItalyModal = document.getElementById('ItalyModal');
var ItalyButton = document.getElementById('Italybtn');
ItalyButton.addEventListener('click', openItaly);
function openItaly() {
  ItalyModal.style.display = 'block';
}

var JapanModal = document.getElementById('JapanModal');
var JapanButton = document.getElementById('Japanbtn');
JapanButton.addEventListener('click', openJapan);
function openJapan() {
  JapanModal.style.display = 'block';
  console.log(123);
}

var MexicoModal = document.getElementById('MexicoModal');
var MexicoButton = document.getElementById('Mexicobtn');
MexicoButton.addEventListener('click', openMexico);
function openMexico() {
  MexicoModal.style.display = 'block';
}

var NigeriaModal = document.getElementById('NigeriaModal');
var NigeriaButton = document.getElementById('Nigeriabtn');
NigeriaButton.addEventListener('click', openNigeria);
function openNigeria() {
  NigeriaModal.style.display = 'block';
}

var PakistanModal = document.getElementById('PakistanModal');
var PakistanButton = document.getElementById('Pakistanbtn');
PakistanButton.addEventListener('click', openPakistan);
function openPakistan() {
  PakistanModal.style.display = 'block';
}

var RussiaModal = document.getElementById('RussiaModal');
var RussiaButton = document.getElementById('Russiabtn');
RussiaButton.addEventListener('click', openRussia);
function openRussia() {
  RussiaModal.style.display = 'block';
}

var SouthAfricaModal = document.getElementById('SouthAfricaModal');
var SouthAfricaButton = document.getElementById('SouthAfricabtn');
SouthAfricaButton.addEventListener('click', openSouthAfrica);
function openSouthAfrica() {
  SouthAfricaModal.style.display = 'block';
}

var SKModal = document.getElementById('SKModal');
var SKButton = document.getElementById('SKbtn');
SKButton.addEventListener('click', openSK);
function openSK() {
  SKModal.style.display = 'block';
}

var SpainModal = document.getElementById('SpainModal');
var SpainButton = document.getElementById('Spainbtn');
SpainButton.addEventListener('click', openSpain);
function openSpain() {
  SpainModal.style.display = 'block';
}

var UkraineModal = document.getElementById('UkraineModal');
var UkraineButton = document.getElementById('Ukrainebtn');
UkraineButton.addEventListener('click', openUkraine);
function openUkraine() {
  UkraineModal.style.display = 'block';
}

var UKModal = document.getElementById('UKModal');
var UKButton = document.getElementById('UKbtn');
UKButton.addEventListener('click', openUK);
function openUK() {
  UKModal.style.display = 'block';
}

var USAModal = document.getElementById('USAModal');
var USAButton = document.getElementById('USAbtn');
USAButton.addEventListener('click', openUSA);
function openUSA() {
  USAModal.style.display = 'block';
}

