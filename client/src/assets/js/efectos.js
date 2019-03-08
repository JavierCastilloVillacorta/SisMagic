$(document).ready(function(){

  $(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });
  
  $("#close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
    $("#cont-generalsist").removeClass('cont-general')
  });
  $("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
    $("#cont-generalsist").addClass('cont-general')
  });
  
  

  $('.dropdown-toggle').dropdown();
  

  });
        