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
var AlgeriaModal = document.getElementById('AlgeriaModal');
var AlgeriaButton = document.getElementById('Algeriabtn');
AlgeriaButton.addEventListener('click', openAlgeria);
function openAlgeria() {
  AlgeriaModal.style.display = 'block';
}

var AngolaModal = document.getElementById('AngolaModal');
var AngolaButton = document.getElementById('Angolabtn');
AngolaButton.addEventListener('click', openAngola);
function openAngola() {
  AngolaModal.style.display = 'block';
}

var BeninModal = document.getElementById('BeninModal');
var BeninButton = document.getElementById('Beninbtn');
BeninButton.addEventListener('click', openBenin);
function openBenin() {
  BeninModal.style.display = 'block';
}

var BotswanaModal = document.getElementById('BotswanaModal');
var BotswanaButton = document.getElementById('Botswanabtn');
BotswanaButton.addEventListener('click', openBotswana);
function openBotswana() {
  BotswanaModal.style.display = 'block';
}

var BurkinaModal = document.getElementById('BurkinaModal');
var BurkinaButton = document.getElementById('Burkinabtn');
BurkinaButton.addEventListener('click', openBurkina);
function openBurkina() {
  BurkinaModal.style.display = 'block';
}

var BurundiModal = document.getElementById('BurundiModal');
var BurundiButton = document.getElementById('Burundibtn');
BurundiButton.addEventListener('click', openBurundi);
function openBurundi() {
  BurundiModal.style.display = 'block';
}

var CaboModal = document.getElementById('CaboModal');
var CaboButton = document.getElementById('Cabobtn');
CaboButton.addEventListener('click', openCabo);
function openCabo() {
  CaboModal.style.display = 'block';
}

var CameroonModal = document.getElementById('CameroonModal');
var CameroonButton = document.getElementById('Cameroonbtn');
CameroonButton.addEventListener('click', openCameroon);
function openCameroon() {
  CameroonModal.style.display = 'block';
}

var CARModal = document.getElementById('CARModal');
var CARButton = document.getElementById('CARbtn');
CARButton.addEventListener('click', openCAR);
function openCAR() {
  CARModal.style.display = 'block';
}

var ChadModal = document.getElementById('ChadModal');
var ChadButton = document.getElementById('Chadbtn');
ChadButton.addEventListener('click', openChad);
function openChad() {
  ChadModal.style.display = 'block';
}

var ComorosModal = document.getElementById('ComorosModal');
var ComorosButton = document.getElementById('Comorosbtn');
ComorosButton.addEventListener('click', openComoros);
function openComoros() {
  ComorosModal.style.display = 'block';
}

var CongoModal = document.getElementById('CongoModal');
var CongoButton = document.getElementById('Congobtn');
CongoButton.addEventListener('click', openCongo);
function openCongo() {
  CongoModal.style.display = 'block';
}

var DRCModal = document.getElementById('DRCModal');
var DRCButton = document.getElementById('DRCbtn');
DRCButton.addEventListener('click', openDRC);
function openDRC() {
  DRCModal.style.display = 'block';
}

var IvoryModal = document.getElementById('IvoryModal');
var IvoryButton = document.getElementById('Ivorybtn');
IvoryButton.addEventListener('click', openIvory);
function openIvory() {
  IvoryModal.style.display = 'block';
}

var DjiboutiModal = document.getElementById('DjiboutiModal');
var DjiboutiButton = document.getElementById('Djiboutibtn');
DjiboutiButton.addEventListener('click', openDjibouti);
function openDjibouti() {
  DjiboutiModal.style.display = 'block';
}

var EgyptModal = document.getElementById('EgyptModal');
var EgyptButton = document.getElementById('Egyptbtn');
EgyptButton.addEventListener('click', openEgypt);
function openEgypt() {
  EgyptModal.style.display = 'block';
}

var EquatorialModal = document.getElementById('EquatorialModal');
var EquatorialButton = document.getElementById('Equatorialbtn');
EquatorialButton.addEventListener('click', openEquatorial);
function openEquatorial() {
  EquatorialModal.style.display = 'block';
}

var EritreaModal = document.getElementById('EritreaModal');
var EritreaButton = document.getElementById('Eritreabtn');
EritreaButton.addEventListener('click', openEritrea);
function openEritrea() {
  EritreaModal.style.display = 'block';
}

var EswatiniModal = document.getElementById('EswatiniModal');
var EswatiniButton = document.getElementById('Eswatinibtn');
EswatiniButton.addEventListener('click', openEswatini);
function openEswatini() {
  EswatiniModal.style.display = 'block';
}

var EthiopiaModal = document.getElementById('EthiopiaModal');
var EthiopiaButton = document.getElementById('Ethiopiabtn');
EthiopiaButton.addEventListener('click', openEthiopia);
function openEthiopia() {
  EthiopiaModal.style.display = 'block';
}

var GabonModal = document.getElementById('GabonModal');
var GabonButton = document.getElementById('Gabonbtn');
GabonButton.addEventListener('click', openGabon);
function openGabon() {
  GabonModal.style.display = 'block';
}

var GambiaModal = document.getElementById('GambiaModal');
var GambiaButton = document.getElementById('Gambiabtn');
GambiaButton.addEventListener('click', openGambia);
function openGambia() {
  GambiaModal.style.display = 'block';
}

var GuineaModal = document.getElementById('GuineaModal');
var GuineaButton = document.getElementById('Guineabtn');
GuineaButton.addEventListener('click', openGuinea);
function openGuinea() {
  GuineaModal.style.display = 'block';
}

var GhanaModal = document.getElementById('GhanaModal');
var GhanaButton = document.getElementById('Ghanabtn');
GhanaButton.addEventListener('click', openGhana);
function openGhana() {
  GhanaModal.style.display = 'block';
}

var BissauModal = document.getElementById('BissauModal');
var BissauButton = document.getElementById('Bissaubtn');
BissauButton.addEventListener('click', openBissau);
function openBissau() {
  BissauModal.style.display = 'block';
}

var KenyaModal = document.getElementById('KenyaModal');
var KenyaButton = document.getElementById('Kenyabtn');
KenyaButton.addEventListener('click', openKenya);
function openKenya() {
  KenyaModal.style.display = 'block';
}

var LesothoModal = document.getElementById('LesothoModal');
var LesothoButton = document.getElementById('Lesothobtn');
LesothoButton.addEventListener('click', openLesotho);
function openLesotho() {
  LesothoModal.style.display = 'block';
}

var LiberiaModal = document.getElementById('LiberiaModal');
var LiberiaButton = document.getElementById('Liberiabtn');
LiberiaButton.addEventListener('click', openLiberia);
function openLiberia() {
  LiberiaModal.style.display = 'block';
}

var LibyaModal = document.getElementById('LibyaModal');
var LibyaButton = document.getElementById('Libyabtn');
LibyaButton.addEventListener('click', openLibya);
function openLibya() {
  LibyaModal.style.display = 'block';
}

var MadagascarModal = document.getElementById('MadagascarModal');
var MadagascarButton = document.getElementById('Madagascarbtn');
MadagascarButton.addEventListener('click', openMadagascar);
function openMadagascar() {
  MadagascarModal.style.display = 'block';
}

var MalawiModal = document.getElementById('MalawiModal');
var MalawiButton = document.getElementById('Malawibtn');
MalawiButton.addEventListener('click', openMalawi);
function openMalawi() {
  MalawiModal.style.display = 'block';
}

var MaliModal = document.getElementById('MaliModal');
var MaliButton = document.getElementById('Malibtn');
MaliButton.addEventListener('click', openMali);
function openMali() {
  MaliModal.style.display = 'block';
}

var MauritaniaModal = document.getElementById('MauritaniaModal');
var MauritaniaButton = document.getElementById('Mauritaniabtn');
MauritaniaButton.addEventListener('click', openMauritania);
function openMauritania() {
  MauritaniaModal.style.display = 'block';
}

var MauritiusModal = document.getElementById('MauritiusModal');
var MauritiusButton = document.getElementById('Mauritiusbtn');
MauritiusButton.addEventListener('click', openMauritius);
function openMauritius() {
  MauritiusModal.style.display = 'block';
}

var MoroccoModal = document.getElementById('MoroccoModal');
var MoroccoButton = document.getElementById('Moroccobtn');
MoroccoButton.addEventListener('click', openMorocco);
function openMorocco() {
  MoroccoModal.style.display = 'block';
}

var MozambiqueModal = document.getElementById('MozambiqueModal');
var MozambiqueButton = document.getElementById('Mozambiquebtn');
MozambiqueButton.addEventListener('click', openMozambique);
function openMozambique() {
  MozambiqueModal.style.display = 'block';
}

var NamibiaModal = document.getElementById('NamibiaModal');
var NamibiaButton = document.getElementById('Namibiabtn');
NamibiaButton.addEventListener('click', openNamibia);
function openNamibia() {
  NamibiaModal.style.display = 'block';
}

var NigerModal = document.getElementById('NigerModal');
var NigerButton = document.getElementById('Nigerbtn');
NigerButton.addEventListener('click', openNiger);
function openNiger() {
  NigerModal.style.display = 'block';
}

var NigeriaModal = document.getElementById('NigeriaModal');
var NigeriaButton = document.getElementById('Nigeriabtn');
NigeriaButton.addEventListener('click', openNigeria);
function openNigeria() {
  NigeriaModal.style.display = 'block';
}

var RwandaModal = document.getElementById('RwandaModal');
var RwandaButton = document.getElementById('Rwandabtn');
RwandaButton.addEventListener('click', openRwanda);
function openRwanda() {
  RwandaModal.style.display = 'block';
}

var SaoTomeModal = document.getElementById('SaoTomeModal');
var SaoTomeButton = document.getElementById('SaoTomebtn');
SaoTomeButton.addEventListener('click', openSaoTome);
function openSaoTome() {
  SaoTomeModal.style.display = 'block';
}

var SenegalModal = document.getElementById('SenegalModal');
var SenegalButton = document.getElementById('Senegalbtn');
SenegalButton.addEventListener('click', openSenegal);
function openSenegal() {
  SenegalModal.style.display = 'block';
}

var SeychellesModal = document.getElementById('SeychellesModal');
var SeychellesButton = document.getElementById('Seychellesbtn');
SeychellesButton.addEventListener('click', openSeychelles);
function openSeychelles() {
  SeychellesModal.style.display = 'block';
}

var SierraModal = document.getElementById('SierraModal');
var SierraButton = document.getElementById('Sierrabtn');
SierraButton.addEventListener('click', openSierra);
function openSierra() {
  SierraModal.style.display = 'block';
}

var SomaliaModal = document.getElementById('SomaliaModal');
var SomaliaButton = document.getElementById('Somaliabtn');
SomaliaButton.addEventListener('click', openSomalia);
function openSomalia() {
  SomaliaModal.style.display = 'block';
}

var SouthAfricaModal = document.getElementById('SouthAfricaModal');
var SouthAfricaButton = document.getElementById('SouthAfricabtn');
SouthAfricaButton.addEventListener('click', openSouthAfrica);
function openSouthAfrica() {
  SouthAfricaModal.style.display = 'block';
}

var SouthSudanModal = document.getElementById('SouthSudanModal');
var SouthSudanButton = document.getElementById('SouthSudanbtn');
SouthSudanButton.addEventListener('click', openSouthSudan);
function openSouthSudan() {
  SouthSudanModal.style.display = 'block';
}

var SudanModal = document.getElementById('SudanModal');
var SudanButton = document.getElementById('Sudanbtn');
SudanButton.addEventListener('click', openSudan);
function openSudan() {
  SudanModal.style.display = 'block';
}

var TanzaniaModal = document.getElementById('TanzaniaModal');
var TanzaniaButton = document.getElementById('Tanzaniabtn');
TanzaniaButton.addEventListener('click', openTanzania);
function openTanzania() {
  TanzaniaModal.style.display = 'block';
}

var TogoModal = document.getElementById('TogoModal');
var TogoButton = document.getElementById('Togobtn');
TogoButton.addEventListener('click', openTogo);
function openTogo() {
  TogoModal.style.display = 'block';
}

var TunisiaModal = document.getElementById('TunisiaModal');
var TunisiaButton = document.getElementById('Tunisiabtn');
TunisiaButton.addEventListener('click', openTunisia);
function openTunisia() {
  TunisiaModal.style.display = 'block';
}

var UgandaModal = document.getElementById('UgandaModal');
var UgandaButton = document.getElementById('Ugandabtn');
UgandaButton.addEventListener('click', openUganda);
function openUganda() {
  UgandaModal.style.display = 'block';
}

var ZambiaModal = document.getElementById('ZambiaModal');
var ZambiaButton = document.getElementById('Zambiabtn');
ZambiaButton.addEventListener('click', openZambia);
function openZambia() {
  ZambiaModal.style.display = 'block';
}

var ZimbabweModal = document.getElementById('ZimbabweModal');
var ZimbabweButton = document.getElementById('Zimbabwebtn');
ZimbabweButton.addEventListener('click', openZimbabwe);
function openZimbabwe() {
  ZimbabweModal.style.display = 'block';
}