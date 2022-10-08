$(document).ready(function () {
  $("#home").hide();
  $("#about").hide();
  $("#projects").hide();
  $("#contacts").hide();

  $("#about").click(function () {
    $("about").toggle(500);
    $("#projects").slideDown("fast");
    $("#contacts").slideDown("fast");
  });
  $("#projects").click(function () {
    $("projects").toggle(500);
    $("#about").toggle("fast");
    $("#contacts").slideDown("fast");
  });
  $("#contacts").click(function () {
    $("#about").slideUp("fast");
    $("#projects").slideUp("fast");
  });
});
