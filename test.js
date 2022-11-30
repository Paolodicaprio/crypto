var $ = (id) => document.getElementById(id);
$("clair").addEventListener(
  "keyup",
  function () {
    nettoy.value = nettoyer(this.value);
  },
  false
);
$("coder").addEventListener(
  "click",
  function () {
    code.value = coder(nettoy.value, decal.value);
  },
  false
);
$("decoder").addEventListener(
  "click",
  function () {
    decoder(code.value, stats, sortie);
  },
  false
);

var nettoyer = (txt) => {
  var accents = "àâëéèêïîôüûç";
  var voyelles = "aaeeeeiiouuc";
  return [...txt.toLowerCase()]
    .map((c) => (accents.includes(c) ? voyelles[accents.indexOf(c)] : c))
    .join("")
    .replace(/[^a-z]/g, "")
    .toUpperCase();
};
var cesar = (c, dec) => {
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alpha[(+dec + alpha.indexOf(c) + 26) % 26];
};
var gras = (txt) => "<span class='super'>" + txt + "</span>";

var coder = (txt, dec) => [...txt].map((c) => cesar(c, dec)).join("");

var decoder = (txt, stats, sortie) => {
  var code = nettoyer(txt);
  var analyse = [...code].reduce(
    (a, c) => a.set(c, (a.get(c) || 0) + 1),
    new Map()
  );
  analyse = [...analyse.entries()].sort((a, b) => b[1] - a[1]);
  stats.value = analyse.map(([k, v]) => k + ":" + v).join("\n");
  sortie.innerHTML = "";
  analyse.forEach((v, k) => {
    var txt = [...code].map((c) => cesar(c, 69 - v[0].charCodeAt(0))).join("");
    sortie.innerHTML += txt + "<br>";
  });
};

