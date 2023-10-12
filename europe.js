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
var AlbaniaModal = document.getElementById('AlbaniaModal');
var AlbaniaButton = document.getElementById('Albaniabtn');
AlbaniaButton.addEventListener('click', openAlbania);
function openAlbania() {
  AlbaniaModal.style.display = 'block';
}

var AndorraModal = document.getElementById('AndorraModal');
var AndorraButton = document.getElementById('Andorrabtn');
AndorraButton.addEventListener('click', openAndorra);
function openAndorra() {
  AndorraModal.style.display = 'block';
}

var BelarusModal = document.getElementById('BelarusModal');
var BelarusButton = document.getElementById('Belarusbtn');
BelarusButton.addEventListener('click', openBelarus);
function openBelarus() {
  BelarusModal.style.display = 'block';
}

var AustriaModal = document.getElementById('AustriaModal');
var AustriaButton = document.getElementById('Austriabtn');
AustriaButton.addEventListener('click', openAustria);
function openAustria() {
  AustriaModal.style.display = 'block';
}

var BelgiumModal = document.getElementById('BelgiumModal');
var BelgiumButton = document.getElementById('Belgiumbtn');
BelgiumButton.addEventListener('click', openBelgium);
function openBelgium() {
  BelgiumModal.style.display = 'block';
}

var BosniaModal = document.getElementById('BosniaModal');
var BosniaButton = document.getElementById('Bosniabtn');
BosniaButton.addEventListener('click', openBosnia);
function openBosnia() {
  BosniaModal.style.display = 'block';
}

var BulgariaModal = document.getElementById('BulgariaModal');
var BulgariaButton = document.getElementById('Bulgariabtn');
BulgariaButton.addEventListener('click', openBulgaria);
function openBulgaria() {
  BulgariaModal.style.display = 'block';
}

var CroatiaModal = document.getElementById('CroatiaModal');
var CroatiaButton = document.getElementById('Croatiabtn');
CroatiaButton.addEventListener('click', openCroatia);
function openCroatia() {
  CroatiaModal.style.display = 'block';
}

var CyprusModal = document.getElementById('CyprusModal');
var CyprusButton = document.getElementById('Cyprusbtn');
CyprusButton.addEventListener('click', openCyprus);
function openCyprus() {
  CyprusModal.style.display = 'block';
}

var CzechModal = document.getElementById('CzechModal');
var CzechButton = document.getElementById('Czechbtn');
CzechButton.addEventListener('click', openCzech);
function openCzech() {
  CzechModal.style.display = 'block';
}

var DenmarkModal = document.getElementById('DenmarkModal');
var DenmarkButton = document.getElementById('Denmarkbtn');
DenmarkButton.addEventListener('click', openDenmark);
function openDenmark() {
  DenmarkModal.style.display = 'block';
}

var EstoniaModal = document.getElementById('EstoniaModal');
var EstoniaButton = document.getElementById('Estoniabtn');
EstoniaButton.addEventListener('click', openEstonia);
function openEstonia() {
  EstoniaModal.style.display = 'block';
}

var FinlandModal = document.getElementById('FinlandModal');
var FinlandButton = document.getElementById('Finlandbtn');
FinlandButton.addEventListener('click', openFinland);
function openFinland() {
  FinlandModal.style.display = 'block';
}

var FranceModal = document.getElementById('FranceModal');
var FranceButton = document.getElementById('Francebtn');
FranceButton.addEventListener('click', openFrance);
function openFrance() {
  FranceModal.style.display = 'block';
}

var GermanyModal = document.getElementById('GermanyModal');
var GermanyButton = document.getElementById('Germanybtn');
GermanyButton.addEventListener('click', openGermany);
function openGermany() {
  GermanyModal.style.display = 'block';
}

var GreeceModal = document.getElementById('GreeceModal');
var GreeceButton = document.getElementById('Greecebtn');
GreeceButton.addEventListener('click', openGreece);
function openGreece() {
  GreeceModal.style.display = 'block';
}

var HungaryModal = document.getElementById('HungaryModal');
var HungaryButton = document.getElementById('Hungarybtn');
HungaryButton.addEventListener('click', openHungary);
function openHungary() {
  HungaryModal.style.display = 'block';
}

var IcelandModal = document.getElementById('IcelandModal');
var IcelandButton = document.getElementById('Icelandbtn');
IcelandButton.addEventListener('click', openIceland);
function openIceland() {
  IcelandModal.style.display = 'block';
}

var IrelandModal = document.getElementById('IrelandModal');
var IrelandButton = document.getElementById('Irelandbtn');
IrelandButton.addEventListener('click', openIreland);
function openIreland() {
  IrelandModal.style.display = 'block';
}

var ItalyModal = document.getElementById('ItalyModal');
var ItalyButton = document.getElementById('Italybtn');
ItalyButton.addEventListener('click', openItaly);
function openItaly() {
  ItalyModal.style.display = 'block';
}

var LatviaModal = document.getElementById('LatviaModal');
var LatviaButton = document.getElementById('Latviabtn');
LatviaButton.addEventListener('click', openLatvia);
function openLatvia() {
  LatviaModal.style.display = 'block';
}

var LiechtensteinModal = document.getElementById('LiechtensteinModal');
var LiechtensteinButton = document.getElementById('Liechtensteinbtn');
LiechtensteinButton.addEventListener('click', openLiechtenstein);
function openLiechtenstein() {
  LiechtensteinModal.style.display = 'block';
}

var LithuaniaModal = document.getElementById('LithuaniaModal');
var LithuaniaButton = document.getElementById('Lithuaniabtn');
LithuaniaButton.addEventListener('click', openLithuania);
function openLithuania() {
  LithuaniaModal.style.display = 'block';
}

var LuxembourgModal = document.getElementById('LuxembourgModal');
var LuxembourgButton = document.getElementById('Luxembourgbtn');
LuxembourgButton.addEventListener('click', openLuxembourg);
function openLuxembourg() {
  LuxembourgModal.style.display = 'block';
}

var MaltaModal = document.getElementById('MaltaModal');
var MaltaButton = document.getElementById('Maltabtn');
MaltaButton.addEventListener('click', openMalta);
function openMalta() {
  MaltaModal.style.display = 'block';
}

var MoldovaModal = document.getElementById('MoldovaModal');
var MoldovaButton = document.getElementById('Moldovabtn');
MoldovaButton.addEventListener('click', openMoldova);
function openMoldova() {
  MoldovaModal.style.display = 'block';
}

var MonacoModal = document.getElementById('MonacoModal');
var MonacoButton = document.getElementById('Monacobtn');
MonacoButton.addEventListener('click', openMonaco);
function openMonaco() {
  MonacoModal.style.display = 'block';
}

var MontenegroModal = document.getElementById('MontenegroModal');
var MontenegroButton = document.getElementById('Montenegrobtn');
MontenegroButton.addEventListener('click', openMontenegro);
function openMontenegro() {
  MontenegroModal.style.display = 'block';
}

var NetherlandsModal = document.getElementById('NetherlandsModal');
var NetherlandsButton = document.getElementById('Netherlandsbtn');
NetherlandsButton.addEventListener('click', openNetherlands);
function openNetherlands() {
  NetherlandsModal.style.display = 'block';
}

var MacedoniaModal = document.getElementById('MacedoniaModal');
var MacedoniaButton = document.getElementById('Macedoniabtn');
MacedoniaButton.addEventListener('click', openMacedonia);
function openMacedonia() {
  MacedoniaModal.style.display = 'block';
}

var NorwayModal = document.getElementById('NorwayModal');
var NorwayButton = document.getElementById('Norwaybtn');
NorwayButton.addEventListener('click', openNorway);
function openNorway() {
  NorwayModal.style.display = 'block';
}

var PolandModal = document.getElementById('PolandModal');
var PolandButton = document.getElementById('Polandbtn');
PolandButton.addEventListener('click', openPoland);
function openPoland() {
  PolandModal.style.display = 'block';
}

var RomaniaModal = document.getElementById('RomaniaModal');
var RomaniaButton = document.getElementById('Romaniabtn');
RomaniaButton.addEventListener('click', openRomania);
function openRomania() {
  RomaniaModal.style.display = 'block';
}

var RussiaModal = document.getElementById('RussiaModal');
var RussiaButton = document.getElementById('Russiabtn');
RussiaButton.addEventListener('click', openRussia);
function openRussia() {
  RussiaModal.style.display = 'block';
}

var SanMarinoModal = document.getElementById('SanMarinoModal');
var SanMarinoButton = document.getElementById('SanMarinobtn');
SanMarinoButton.addEventListener('click', openSanMarino);
function openSanMarino() {
  SanMarinoModal.style.display = 'block';
}

var SerbiaModal = document.getElementById('SerbiaModal');
var SerbiaButton = document.getElementById('Serbiabtn');
SerbiaButton.addEventListener('click', openSerbia);
function openSerbia() {
  SerbiaModal.style.display = 'block';
}

var SlovakiaModal = document.getElementById('SlovakiaModal');
var SlovakiaButton = document.getElementById('Slovakiabtn');
SlovakiaButton.addEventListener('click', openSlovakia);
function openSlovakia() {
  SlovakiaModal.style.display = 'block';
}

var SloveniaModal = document.getElementById('SloveniaModal');
var SloveniaButton = document.getElementById('Sloveniabtn');
SloveniaButton.addEventListener('click', openSlovenia);
function openSlovenia() {
  SloveniaModal.style.display = 'block';
}

var SpainModal = document.getElementById('SpainModal');
var SpainButton = document.getElementById('Spainbtn');
SpainButton.addEventListener('click', openSpain);
function openSpain() {
  SpainModal.style.display = 'block';
}

var SwedenModal = document.getElementById('SwedenModal');
var SwedenButton = document.getElementById('Swedenbtn');
SwedenButton.addEventListener('click', openSweden);
function openSweden() {
  SwedenModal.style.display = 'block';
}

var SwitzerlandModal = document.getElementById('SwitzerlandModal');
var SwitzerlandButton = document.getElementById('Switzerlandbtn');
SwitzerlandButton.addEventListener('click', openSwitzerland);
function openSwitzerland() {
  SwitzerlandModal.style.display = 'block';
}

var UkraineModal = document.getElementById('UkraineModal');
var UkraineButton = document.getElementById('Ukrainebtn');
UkraineButton.addEventListener('click', openUkraine);
function openUkraine() {
  UkraineModal.style.display = 'block';
}

var UnitedKingdomModal = document.getElementById('UnitedKingdomModal');
var UnitedKingdomButton = document.getElementById('UnitedKingdombtn');
UnitedKingdomButton.addEventListener('click', openUnitedKingdom);
function openUnitedKingdom() {
  UnitedKingdomModal.style.display = 'block';
}

var VaticanModal = document.getElementById('VaticanModal');
var VaticanButton = document.getElementById('Vaticanbtn');
VaticanButton.addEventListener('click', openVatican);
function openVatican() {
  VaticanModal.style.display = 'block';
}