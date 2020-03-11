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
  $(".sidebar ul a").click(function() {
    //esto es el valor de href del sidebar link que has clickado
    var href = $(this).attr("href");

    var section = $(href);
    section.addClass("pt-page-moveFromLeft pt-page-ontop");
    //section.addClass("pt-page-moveFromLeft pt-page-ontop");
  });
});
