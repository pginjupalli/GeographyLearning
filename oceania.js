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

// Random Modal Generator
var randomBtn = document.getElementById('randomButton');
randomBtn.addEventListener('click', openRandomModal);
function openRandomModal() {
  allModals[(Math.floor(Math.random() * allModals.length))].style.display = 'block';
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
var AustraliaModal = document.getElementById('AustraliaModal');
var AustraliaButton = document.getElementById('Australiabtn');
AustraliaButton.addEventListener('click', openAustralia);
function openAustralia() {
  AustraliaModal.style.display = 'block';
}

var FijiModal = document.getElementById('FijiModal');
var FijiButton = document.getElementById('Fijibtn');
FijiButton.addEventListener('click', openFiji);
function openFiji() {
  FijiModal.style.display = 'block';
}

var KiribatiModal = document.getElementById('KiribatiModal');
var KiribatiButton = document.getElementById('Kiribatibtn');
KiribatiButton.addEventListener('click', openKiribati);
function openKiribati() {
  KiribatiModal.style.display = 'block';
}

var MarshallModal = document.getElementById('MarshallModal');
var MarshallButton = document.getElementById('Marshallbtn');
MarshallButton.addEventListener('click', openMarshall);
function openMarshall() {
  MarshallModal.style.display = 'block';
}

var MicronesiaModal = document.getElementById('MicronesiaModal');
var MicronesiaButton = document.getElementById('Micronesiabtn');
MicronesiaButton.addEventListener('click', openMicronesia);
function openMicronesia() {
  MicronesiaModal.style.display = 'block';
}

var NauruModal = document.getElementById('NauruModal');
var NauruButton = document.getElementById('Naurubtn');
NauruButton.addEventListener('click', openNauru);
function openNauru() {
  NauruModal.style.display = 'block';
}

var NewZealandModal = document.getElementById('NewZealandModal');
var NewZealandButton = document.getElementById('NewZealandbtn');
NewZealandButton.addEventListener('click', openNewZealand);
function openNewZealand() {
  NewZealandModal.style.display = 'block';
}

var PalauModal = document.getElementById('PalauModal');
var PalauButton = document.getElementById('Palaubtn');
PalauButton.addEventListener('click', openPalau);
function openPalau() {
  PalauModal.style.display = 'block';
}

var PapuaModal = document.getElementById('PapuaModal');
var PapuaButton = document.getElementById('Papuabtn');
PapuaButton.addEventListener('click', openPapua);
function openPapua() {
  PapuaModal.style.display = 'block';
}

var SamoaModal = document.getElementById('SamoaModal');
var SamoaButton = document.getElementById('Samoabtn');
SamoaButton.addEventListener('click', openSamoa);
function openSamoa() {
  SamoaModal.style.display = 'block';
}

var SolomonModal = document.getElementById('SolomonModal');
var SolomonButton = document.getElementById('Solomonbtn');
SolomonButton.addEventListener('click', openSolomon);
function openSolomon() {
  SolomonModal.style.display = 'block';
}

var TongaModal = document.getElementById('TongaModal');
var TongaButton = document.getElementById('Tongabtn');
TongaButton.addEventListener('click', openTonga);
function openTonga() {
  TongaModal.style.display = 'block';
}

var TuvaluModal = document.getElementById('TuvaluModal');
var TuvaluButton = document.getElementById('Tuvalubtn');
TuvaluButton.addEventListener('click', openTuvalu);
function openTuvalu() {
  TuvaluModal.style.display = 'block';
}

var VanuatuModal = document.getElementById('VanuatuModal');
var VanuatuButton = document.getElementById('Vanuatubtn');
VanuatuButton.addEventListener('click', openVanuatu);
function openVanuatu() {
  VanuatuModal.style.display = 'block';
}