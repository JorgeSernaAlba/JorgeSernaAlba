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

  var arrayDeAnimaciones = ["pt-page-moveFromLeft", "pt-page-moveFromLeftEasing"];
  var contador = 0;

  $(".sidebar ul a").click(function() {
    //esto es el valor de href del sidebar link que has clickado
    var href = $(this).attr("href");

    var allSections = $("section");
    allSections.removeClass("pt-page-moveFromLeft");
    allSections.removeClass("pt-page-moveFromLeftEasing");

    var currentSection = $(href);

    currentSection.addClass(arrayDeAnimaciones[contador]);

    contador = contador + 1;

    if (contador == 2) {
      contador = 0;
    }

    //while (input !== "quit") {}
  });
});
