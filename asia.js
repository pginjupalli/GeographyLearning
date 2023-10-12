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
var AfghanistanModal = document.getElementById('AfghanistanModal');
var AfghanistanButton = document.getElementById('Afghanistanbtn');
AfghanistanButton.addEventListener('click', openAfghanistan);
function openAfghanistan() {
  AfghanistanModal.style.display = 'block';
}

var ArmeniaModal = document.getElementById('ArmeniaModal');
var ArmeniaButton = document.getElementById('Armeniabtn');
ArmeniaButton.addEventListener('click', openArmenia);
function openArmenia() {
  ArmeniaModal.style.display = 'block';
}

var AzerbaijanModal = document.getElementById('AzerbaijanModal');
var AzerbaijanButton = document.getElementById('Azerbaijanbtn');
AzerbaijanButton.addEventListener('click', openAzerbaijan);
function openAzerbaijan() {
  AzerbaijanModal.style.display = 'block';
}

var BangladeshModal = document.getElementById('BangladeshModal');
var BangladeshButton = document.getElementById('Bangladeshbtn');
BangladeshButton.addEventListener('click', openBangladesh);
function openBangladesh() {
  BangladeshModal.style.display = 'block';
}

var BhutanModal = document.getElementById('BhutanModal');
var BhutanButton = document.getElementById('Bhutanbtn');
BhutanButton.addEventListener('click', openBhutan);
function openBhutan() {
  BhutanModal.style.display = 'block';
}

var BruneiModal = document.getElementById('BruneiModal');
var BruneiButton = document.getElementById('Bruneibtn');
BruneiButton.addEventListener('click', openBrunei);
function openBrunei() {
  BruneiModal.style.display = 'block';
}

var BahrainModal = document.getElementById('BahrainModal');
var BahrainButton = document.getElementById('Bahrainbtn');
BahrainButton.addEventListener('click', openBahrain);
function openBahrain() {
  BahrainModal.style.display = 'block';
}

var CambodiaModal = document.getElementById('CambodiaModal');
var CambodiaButton = document.getElementById('Cambodiabtn');
CambodiaButton.addEventListener('click', openCambodia);
function openCambodia() {
  CambodiaModal.style.display = 'block';
}

var ChinaModal = document.getElementById('ChinaModal');
var ChinaButton = document.getElementById('Chinabtn');
ChinaButton.addEventListener('click', openChina);
function openChina() {
  ChinaModal.style.display = 'block';
}

var GeorgiaModal = document.getElementById('GeorgiaModal');
var GeorgiaButton = document.getElementById('Georgiabtn');
GeorgiaButton.addEventListener('click', openGeorgia);
function openGeorgia() {
  GeorgiaModal.style.display = 'block';
}

var IndiaModal = document.getElementById('IndiaModal');
var IndiaButton = document.getElementById('Indiabtn');
IndiaButton.addEventListener('click', openIndia);
function openIndia() {
  IndiaModal.style.display = 'block';
}

var IndonesiaModal = document.getElementById('IndonesiaModal');
var IndonesiaButton = document.getElementById('Indonesiabtn');
IndonesiaButton.addEventListener('click', openIndonesia);
function openIndonesia() {
  IndonesiaModal.style.display = 'block';
}

var IranModal = document.getElementById('IranModal');
var IranButton = document.getElementById('Iranbtn');
IranButton.addEventListener('click', openIran);
function openIran() {
  IranModal.style.display = 'block';
}

var IraqModal = document.getElementById('IraqModal');
var IraqButton = document.getElementById('Iraqbtn');
IraqButton.addEventListener('click', openIraq);
function openIraq() {
  IraqModal.style.display = 'block';
}

var IsraelModal = document.getElementById('IsraelModal');
var IsraelButton = document.getElementById('Israelbtn');
IsraelButton.addEventListener('click', openIsrael);
function openIsrael() {
  IsraelModal.style.display = 'block';
}

var JapanModal = document.getElementById('JapanModal');
var JapanButton = document.getElementById('Japanbtn');
JapanButton.addEventListener('click', openJapan);
function openJapan() {
  JapanModal.style.display = 'block';
}

var JordanModal = document.getElementById('JordanModal');
var JordanButton = document.getElementById('Jordanbtn');
JordanButton.addEventListener('click', openJordan);
function openJordan() {
  JordanModal.style.display = 'block';
}

var KazakhstanModal = document.getElementById('KazakhstanModal');
var KazakhstanButton = document.getElementById('Kazakhstanbtn');
KazakhstanButton.addEventListener('click', openKazakhstan);
function openKazakhstan() {
  KazakhstanModal.style.display = 'block';
}

var KuwaitModal = document.getElementById('KuwaitModal');
var KuwaitButton = document.getElementById('Kuwaitbtn');
KuwaitButton.addEventListener('click', openKuwait);
function openKuwait() {
  KuwaitModal.style.display = 'block';
}

var KyrgyzstanModal = document.getElementById('KyrgyzstanModal');
var KyrgyzstanButton = document.getElementById('Kyrgyzstanbtn');
KyrgyzstanButton.addEventListener('click', openKyrgyzstan);
function openKyrgyzstan() {
  KyrgyzstanModal.style.display = 'block';
}

var LaosModal = document.getElementById('LaosModal');
var LaosButton = document.getElementById('Laosbtn');
LaosButton.addEventListener('click', openLaos);
function openLaos() {
  LaosModal.style.display = 'block';
}

var LebanonModal = document.getElementById('LebanonModal');
var LebanonButton = document.getElementById('Lebanonbtn');
LebanonButton.addEventListener('click', openLebanon);
function openLebanon() {
  LebanonModal.style.display = 'block';
}

var MalaysiaModal = document.getElementById('MalaysiaModal');
var MalaysiaButton = document.getElementById('Malaysiabtn');
MalaysiaButton.addEventListener('click', openMalaysia);
function openMalaysia() {
  MalaysiaModal.style.display = 'block';
}

var MaldivesModal = document.getElementById('MaldivesModal');
var MaldivesButton = document.getElementById('Maldivesbtn');
MaldivesButton.addEventListener('click', openMaldives);
function openMaldives() {
  MaldivesModal.style.display = 'block';
}

var MongoliaModal = document.getElementById('MongoliaModal');
var MongoliaButton = document.getElementById('Mongoliabtn');
MongoliaButton.addEventListener('click', openMongolia);
function openMongolia() {
  MongoliaModal.style.display = 'block';
}

var MyanmarModal = document.getElementById('MyanmarModal');
var MyanmarButton = document.getElementById('Myanmarbtn');
MyanmarButton.addEventListener('click', openMyanmar);
function openMyanmar() {
  MyanmarModal.style.display = 'block';
}

var NepalModal = document.getElementById('NepalModal');
var NepalButton = document.getElementById('Nepalbtn');
NepalButton.addEventListener('click', openNepal);
function openNepal() {
  NepalModal.style.display = 'block';
}

var NorthKoreaModal = document.getElementById('NorthKoreaModal');
var NorthKoreaButton = document.getElementById('NorthKoreabtn');
NorthKoreaButton.addEventListener('click', openNorthKorea);
function openNorthKorea() {
  NorthKoreaModal.style.display = 'block';
}

var OmanModal = document.getElementById('OmanModal');
var OmanButton = document.getElementById('Omanbtn');
OmanButton.addEventListener('click', openOman);
function openOman() {
  OmanModal.style.display = 'block';
}

var PakistanModal = document.getElementById('PakistanModal');
var PakistanButton = document.getElementById('Pakistanbtn');
PakistanButton.addEventListener('click', openPakistan);
function openPakistan() {
  PakistanModal.style.display = 'block';
}

var PalestineModal = document.getElementById('PalestineModal');
var PalestineButton = document.getElementById('Palestinebtn');
PalestineButton.addEventListener('click', openPalestine);
function openPalestine() {
  PalestineModal.style.display = 'block';
}

var PhilippinesModal = document.getElementById('PhilippinesModal');
var PhilippinesButton = document.getElementById('Philippinesbtn');
PhilippinesButton.addEventListener('click', openPhilippines);
function openPhilippines() {
  PhilippinesModal.style.display = 'block';
}

var QatarModal = document.getElementById('QatarModal');
var QatarButton = document.getElementById('Qatarbtn');
QatarButton.addEventListener('click', openQatar);
function openQatar() {
  QatarModal.style.display = 'block';
}

var SaudiArabiaModal = document.getElementById('SaudiArabiaModal');
var SaudiArabiaButton = document.getElementById('SaudiArabiabtn');
SaudiArabiaButton.addEventListener('click', openSaudiArabia);
function openSaudiArabia() {
  SaudiArabiaModal.style.display = 'block';
}

var SingaporeModal = document.getElementById('SingaporeModal');
var SingaporeButton = document.getElementById('Singaporebtn');
SingaporeButton.addEventListener('click', openSingapore);
function openSingapore() {
  SingaporeModal.style.display = 'block';
}

var SouthKoreaModal = document.getElementById('SouthKoreaModal');
var SouthKoreaButton = document.getElementById('SouthKoreabtn');
SouthKoreaButton.addEventListener('click', openSouthKorea);
function openSouthKorea() {
  SouthKoreaModal.style.display = 'block';
}

var SriLankaModal = document.getElementById('SriLankaModal');
var SriLankaButton = document.getElementById('SriLankabtn');
SriLankaButton.addEventListener('click', openSriLanka);
function openSriLanka() {
  SriLankaModal.style.display = 'block';
}

var SyriaModal = document.getElementById('SyriaModal');
var SyriaButton = document.getElementById('Syriabtn');
SyriaButton.addEventListener('click', openSyria);
function openSyria() {
  SyriaModal.style.display = 'block';
}

var TajikistanModal = document.getElementById('TajikistanModal');
var TajikistanButton = document.getElementById('Tajikistanbtn');
TajikistanButton.addEventListener('click', openTajikistan);
function openTajikistan() {
  TajikistanModal.style.display = 'block';
}

var ThailandModal = document.getElementById('ThailandModal');
var ThailandButton = document.getElementById('Thailandbtn');
ThailandButton.addEventListener('click', openThailand);
function openThailand() {
  ThailandModal.style.display = 'block';
}

var TimorLesteModal = document.getElementById('TimorLesteModal');
var TimorLesteButton = document.getElementById('TimorLestebtn');
TimorLesteButton.addEventListener('click', openTimorLeste);
function openTimorLeste() {
  TimorLesteModal.style.display = 'block';
}

var TurkmenistanModal = document.getElementById('TurkmenistanModal');
var TurkmenistanButton = document.getElementById('Turkmenistanbtn');
TurkmenistanButton.addEventListener('click', openTurkmenistan);
function openTurkmenistan() {
  TurkmenistanModal.style.display = 'block';
}

var TurkeyModal = document.getElementById('TurkeyModal');
var TurkeyButton = document.getElementById('Turkeybtn');
TurkeyButton.addEventListener('click', openTurkey);
function openTurkey() {
  TurkeyModal.style.display = 'block';
}

var UAEModal = document.getElementById('UAEModal');
var UAEButton = document.getElementById('UAEbtn');
UAEButton.addEventListener('click', openUAE);
function openUAE() {
  UAEModal.style.display = 'block';
}

var UzbekistanModal = document.getElementById('UzbekistanModal');
var UzbekistanButton = document.getElementById('Uzbekistanbtn');
UzbekistanButton.addEventListener('click', openUzbekistan);
function openUzbekistan() {
  UzbekistanModal.style.display = 'block';
}

var VietnamModal = document.getElementById('VietnamModal');
var VietnamButton = document.getElementById('Vietnambtn');
VietnamButton.addEventListener('click', openVietnam);
function openVietnam() {
  VietnamModal.style.display = 'block';
}

var YemenModal = document.getElementById('YemenModal');
var YemenButton = document.getElementById('Yemenbtn');
YemenButton.addEventListener('click', openYemen);
function openYemen() {
  YemenModal.style.display = 'block';
}