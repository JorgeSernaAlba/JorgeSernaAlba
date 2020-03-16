$(document).ready(function() {
  //cuando hago click en .js-showsidebar
  $(".js-showsidebar-button").click(function() {
    //quita/pon classe show-sidebar de sidebar
    $(".sidebar").toggleClass("show-sidebar");
  });

  //escribir en home
  if ($("#typed").length) {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 0,
      backDelay: 700,
      startDelay: 200,
      fadeOut: !1,
      loop: !0,
      showCursor: !1
    });
  }

  //v = "pt-page-scaleDown",
  // h = "pt-page-moveFromLeft pt-page-ontop"
  //animaciones sidebar nav

  var arrayDeAnimaciones = ["pt-page-moveFromLeft", "pt-page-scaleUp", "pt-page-rotateUnfoldRight"];
  var contador = 0;

  $(".sidebar ul a").click(function() {
    var numeroDeAnimaciones = arrayDeAnimaciones.length; //numero de animaciones del array de arriba
    var href = $(this).attr("href"); //esto es el valor de href del sidebar link que has clickado
    var allSections = $("section"); //todos los elementos HTML tipo SECTION
    var currentSection = $(href);

    //BORRAMOS TODAS LAS CLASES DE TODAS LAS SECCIONES
    for (var i = 0; i < numeroDeAnimaciones; i++) {
      var claseABorrar = arrayDeAnimaciones[i];
      allSections.removeClass(claseABorrar);
    }

    //añadir la clase que toca
    currentSection.addClass(arrayDeAnimaciones[contador]);

    //sumo uno al contador para que la siguiente sea distinta
    contador = contador + 1;

    //si el contador es igual al numero de animaciones lo pongo a 0
    if (contador == numeroDeAnimaciones) {
      contador = 0;
    }
  });
});
