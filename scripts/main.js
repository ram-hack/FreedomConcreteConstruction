$(document).ready(function() {
  $(document).scroll(function(){
// change if statement math later when more content on Page. account for height of window
    if($("#header-container").offset().top -100 <= $(document).scrollTop()){
      $("#trowel-container").css("left","120vw");
    }


  });

  var queryStart = true;
  $("#hamburger").click(function () {
    $("#button-container").toggleClass("closed");
    $("#hamburger").toggleClass("forward");
    if (!queryStart){
      $("#hamburger").toggleClass("backward");
    }
    queryStart = false;



});
  function mediaChanges(mediaQuery) {
    //small screen
    if (mediaQuery.matches){
      $("#button-container").addClass("hamMenu closed");

    }else{
      //big screen
      $("#button-container").removeClass("hamMenu closed");
      $("#hamburger").removeClass("forward");
      $("#hamburger").removeClass("backward");

      queryStart = true;

    }
  }
  var mediaQuery = window.matchMedia("(max-width:800px)");
  mediaChanges(mediaQuery);
  mediaQuery.addListener(mediaChanges);


});
