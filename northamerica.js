
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
var AntiguaModal = document.getElementById('AntiguaModal');
var AntiguaButton = document.getElementById('Antiguabtn');
AntiguaButton.addEventListener('click', openAntigua);
function openAntigua() {
  AntiguaModal.style.display = 'block';
}

var BahamasModal = document.getElementById('BahamasModal');
var BahamasButton = document.getElementById('Bahamasbtn');
BahamasButton.addEventListener('click', openBahamas);
function openBahamas() {
  BahamasModal.style.display = 'block';
}

var BarbadosModal = document.getElementById('BarbadosModal');
var BarbadosButton = document.getElementById('Barbadosbtn');
BarbadosButton.addEventListener('click', openBarbados);
function openBarbados() {
  BarbadosModal.style.display = 'block';
}

var BelizeModal = document.getElementById('BelizeModal');
var BelizeButton = document.getElementById('Belizebtn');
BelizeButton.addEventListener('click', openBelize);
function openBelize() {
  BelizeModal.style.display = 'block';

}

var CanadaModal = document.getElementById('CanadaModal');
var CanadaButton = document.getElementById('Canadabtn');
CanadaButton.addEventListener('click', openCanada);
function openCanada() {
  CanadaModal.style.display = 'block';
}

var CostaModal = document.getElementById('CostaModal');
var CostaButton = document.getElementById('Costabtn');
CostaButton.addEventListener('click', openCosta);
function openCosta() {
  CostaModal.style.display = 'block';
}

var CubaModal = document.getElementById('CubaModal');
var CubaButton = document.getElementById('Cubabtn');
CubaButton.addEventListener('click', openCuba);
function openCuba() {
  CubaModal.style.display = 'block';
}

var DominicaModal = document.getElementById('DominicaModal');
var DominicaButton = document.getElementById('Dominicabtn');
DominicaButton.addEventListener('click', openDominica);
function openDominica() {
  DominicaModal.style.display = 'block';
}

var DRModal = document.getElementById('DRModal');
var DRButton = document.getElementById('DRbtn');
DRButton.addEventListener('click', openDR);
function openDR() {
  DRModal.style.display = 'block';
}

var SalvadorModal = document.getElementById('SalvadorModal');
var SalvadorButton = document.getElementById('Salvadorbtn');
SalvadorButton.addEventListener('click', openSalvador);
function openSalvador() {
  SalvadorModal.style.display = 'block';
}

var GrenadaModal = document.getElementById('GrenadaModal');
var GrenadaButton = document.getElementById('Grenadabtn');
GrenadaButton.addEventListener('click', openGrenada);
function openGrenada() {
  GrenadaModal.style.display = 'block';
}

var GuatemalaModal = document.getElementById('GuatemalaModal');
var GuatemalaButton = document.getElementById('Guatemalabtn');
GuatemalaButton.addEventListener('click', openGuatemala);
function openGuatemala() {
  GuatemalaModal.style.display = 'block';
}

var HaitiModal = document.getElementById('HaitiModal');
var HaitiButton = document.getElementById('Haitibtn');
HaitiButton.addEventListener('click', openHaiti);
function openHaiti() {
  HaitiModal.style.display = 'block';
}

var HondurasModal = document.getElementById('HondurasModal');
var HondurasButton = document.getElementById('Hondurasbtn');
HondurasButton.addEventListener('click', openHonduras);
function openHonduras() {
  HondurasModal.style.display = 'block';
}

var JamaicaModal = document.getElementById('JamaicaModal');
var JamaicaButton = document.getElementById('Jamaicabtn');
JamaicaButton.addEventListener('click', openJamaica);
function openJamaica() {
  JamaicaModal.style.display = 'block';
}

var MexicoModal = document.getElementById('MexicoModal');
var MexicoButton = document.getElementById('Mexicobtn');
MexicoButton.addEventListener('click', openMexico);
function openMexico() {
  MexicoModal.style.display = 'block';
}

var NicaraguaModal = document.getElementById('NicaraguaModal');
var NicaraguaButton = document.getElementById('Nicaraguabtn');
NicaraguaButton.addEventListener('click', openNicaragua);
function openNicaragua() {
  NicaraguaModal.style.display = 'block';
}

var PanamaModal = document.getElementById('PanamaModal');
var PanamaButton = document.getElementById('Panamabtn');
PanamaButton.addEventListener('click', openPanama);
function openPanama() {
  PanamaModal.style.display = 'block';
}

var SaintKittsModal = document.getElementById('SaintKittsModal');
var SaintKittsButton = document.getElementById('SaintKittsbtn');
SaintKittsButton.addEventListener('click', openSaintKitts);
function openSaintKitts() {
  SaintKittsModal.style.display = 'block';
}

var SaintLuciaModal = document.getElementById('SaintLuciaModal');
var SaintLuciaButton = document.getElementById('SaintLuciabtn');
SaintLuciaButton.addEventListener('click', openSaintLucia);
function openSaintLucia() {
  SaintLuciaModal.style.display = 'block';
}

var SaintVincentModal = document.getElementById('SaintVincentModal');
var SaintVincentButton = document.getElementById('SaintVincentbtn');
SaintVincentButton.addEventListener('click', openSaintVincent);
function openSaintVincent() {
  SaintVincentModal.style.display = 'block';
}

var TrinidadModal = document.getElementById('TrinidadModal');
var TrinidadButton = document.getElementById('Trinidadbtn');
TrinidadButton.addEventListener('click', openTrinidad);
function openTrinidad() {
  TrinidadModal.style.display = 'block';
}

var USAModal = document.getElementById('USAModal');
var USAButton = document.getElementById('USAbtn');
USAButton.addEventListener('click', openUSA);
function openUSA() {
  USAModal.style.display = 'block';
}

// Random Modal Generator
var randomBtn = document.getElementById('randomButton');
randomBtn.addEventListener('click', openRandomModal);
function openRandomModal() {
  allModals[(Math.floor(Math.random() * allModals.length))].style.display = 'block';
}