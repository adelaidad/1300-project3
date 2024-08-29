// when #menu is clicked:
$("#menub").click(function() {
  $("#navigation").removeClass("hidden");
});
// when #exit is clicked:
$("#exit").click(function() {
    $("#navigation").addClass("hidden");
  });

// when the window is resized:
$(window).resize(function() {
  if ($(window).width() > 900) {
    $("#navigation").removeClass("navside");
    $("#navigation").removeClass("hidden");
    $("#exit").addClass("hidden");
    $("#menub").addClass("hidden");
  } else {
    $("#navigation").addClass("navside");
    $("#navigation").addClass("hidden");
    $("#exit").removeClass("hidden");
    $("#menub").removeClass("hidden");

  }
});
// when a window is a certain screen:
if ($(window).width() < 900) {
  $("#navigation").addClass("navside");
    $("#navigation").addClass("hidden");
    $("#exit").removeClass("hidden");
    $("#menub").removeClass("hidden");
} else {
    $("#navigation").removeClass("navside");
    $("#navigation").removeClass("hidden");
    $("#exit").addClass("hidden");
    $("#menub").addClass("hidden");
}
