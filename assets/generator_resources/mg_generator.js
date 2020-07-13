/** TODO: 
 * Add all the images
 * Expand the text descriptions of each creature
 */

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    mg = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/assets/generator_resources/mg_generator.json", true);
xmlhttp.send();

CHARname = "Jane";

function rollHP() {
  var die1 = Math.floor(Math.random() * 4) + 1;
  var die2 = Math.floor(Math.random() * 4) + 1;
  var die3 = Math.floor(Math.random() * 4) + 1;
  return die1 + die2 + die3 + 4;
}

function rollStats() {
  var points = 3;
var POW = 0;
var INS = 0;
var KNO = 0;

  while (points > 0) {
    random = Math.random();

    if (random <= .33 && POW < 2) {
      POW++;
      points--;
    } else if (random <= .66 && INS < 2) {
      INS++;
      points--;
    } else if (random <= 1 && KNO < 2) {
      KNO++;
      points--;
    }
  }

      document.getElementById("charPOW").innerText = "Power: " + POW;
      document.getElementById("charINS").innerText = "Instinct: " + INS;
      document.getElementById("charKNO").innerText = "Knowledge: " + KNO;
}

  function selectRandom(jsonList) {
    result = jsonList[Math.floor(Math.random() * jsonList.length)];
    if (Array.isArray(result)) {
      result = selectRandom(result);
    }
    return result;
  }

  function generate() {
    CHARname = selectRandom(mg.Names);
    document.getElementById("charName").innerText = "Name: " + CHARname;

    /* ======= STATS ======= */
    rollStats();

    document.getElementById("charHP").innerText = "HP: " + rollHP();

    /* ======= EQUIPMENT ======= */
    //Show all items: melee, ranged, armor, rations, and 3 random items

    document.getElementById("charItems").innerHTML =
      '<div class="row">' +
      '<div class="col-6"> • <strong>Weapon:</strong> ' +
      selectRandom(mg.MeleeWeapons) +
      " </div>" +
      '<div class="col-6"> • <strong>Weapon:</strong> ' +
      selectRandom(mg.RangedWeapons) +
      " </div>" +
      '<div class="col-6"> • <strong>Armor:</strong> ' +
      selectRandom(mg.Armor) +
      "</div>" +
      '<div class="col-6"> • Rations (10 uses)</div>' +
      '<div class="col-6"> • Torches (10 uses)</div>' +
      '<div class="col-6"> • Ten-foot pole</div>' +
      '<div class="col-6"> • Coin (100)</div>' +
      '<div class="col-6"> • Flint and Steel</div>' +
      '<div class="col-6"> • Pen and Paper</div>' +
      '<div class="col-6"> • Skin of fresh water</div>' +
      '<div class="col-6"> • Bottle of fine wine (3 uses)</div>' +
      '<div class="col-6"> • Instrument of your choice</div>' +
      '<div class="col-6"> • Faithful Pet and supplies to care for it.<br><i>If discarded, is lost forever</i></div>' +
      '<div class="col-6"> • Fancy clothes<br><i>If discarded, is lost forever</i></div>' +
      '<div class="col-6"> • Spell Rune <i>(of a random spell)</i></div></div>';

  document.getElementById("charCard").style = "display:block";
    
  }

  function saveCharacterIMG() {
    imageName = CHARname;
    window.scrollTo(window.pageXOffset, 0);
    var container = document.getElementById("charCard");
    useWidth = container.offsetWidth;
    useHeight = container.offsetHeight;
    html2canvas(container, {
      allowTaint: true,
      width: useWidth,
      height: useHeight,
      scale: 2,
    }).then(function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "marsh-goons-" + imageName.replace(/ /g, "-") + ".png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }

window.onload = function () {
  vars = getUrlVars();
  if (getUrlVars()["pre"]) {
    generate();
  }
};

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}