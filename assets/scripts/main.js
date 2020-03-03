$(document).ready(function() {
  //cuando hago click en .js-showsidebar
  $(".js-showsidebar-button").click(function() {
    //quita/pon classe show-sidebar de sidebar
    $(".sidebar").toggleClass("show-sidebar");
  });

  //llamamos a la funcion typeWriter cuando el document es READY (si no no encunetra el elemento HTML)
  typeWriter();
});

var i = 0;
var j = 12;
var txt = "Jorge Serna"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    var elementoHTML = document.getElementById("demo");
    var textoQueHayAhora = elementoHTML.innerHTML;

    elementoHTML.innerHTML = textoQueHayAhora + txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
