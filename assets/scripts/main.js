$(document).ready(function() {
  //cuando hago click en .js-showsidebar
  $(".js-showsidebar-button").click(function() {
    //quita/pon classe show-sidebar de sidebar
    $(".sidebar").toggleClass("show-sidebar");
  });

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
});
