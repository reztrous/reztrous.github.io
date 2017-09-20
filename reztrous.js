var bonnesReponses = [];

$('.reztrous').each(function(idx, elt) {
  var jelt = $(elt);
  // parcourir les enfants
  var reponses = [];
  $(elt).children().each(function(idx, child) {
    var jchild = $(child);
    // choper les valeurs et se souvenir de la bonne valeur
    var reponse = jchild.html();
    reponses.push(reponse);
    if (jchild.hasClass("v")) bonnesReponses.push(reponse);
    // les rendre invisibles
    jchild.hide();
  });
  // ajouter un dropdown
  var combo = $("<select/>").attr("id", "cb"+idx).attr("name", "cb"+idx);
  $.each(reponses, function (i, el) {
    combo.append("<option>" + el + "</option>");
  });
  jelt.append(combo);
});

function verifier() {
  var nbMauvaisesReponses = 0;
  $('.reztrous').each(function(idx, elt) {
    var dd = $(elt).children('select');
    if (dd.val() != bonnesReponses[idx]) nbMauvaisesReponses++;
  });
  var msg = "";
  switch (nbMauvaisesReponses) {
    case 0: msg = "Tout juste ! Bravo !"; break;
    case 1: msg = "Une seule mauvaise réponse"; break;
    default: msg = nbMauvaisesReponses + " mauvaises réponses"; break;
  }
  alert(msg);
}
