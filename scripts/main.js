$(document).ready(function() {
  $(document).scroll(function(){
// change if statement math later when more content on Page. account for height of window
    if($("#header-container").offset().top -100 <= $(document).scrollTop()){
      $("#trowel-container").css("left","120vw");
    }


  });
  $("#hamburger").click(function () {
    $("#button-container").toggleClass("closed");
    $("#hamburger").toggleClass("forward");
});
  function mediaChanges(mediaQuery) {
    if (mediaQuery.matches){
      $("#button-container").addClass("hamMenu closed");

    }else{
      $("#button-container").removeClass("hamMenu closed");
      $("#hamburger").removeClass("forward");

    }
  }
  var mediaQuery = window.matchMedia("(max-width:800px)");
  mediaChanges(mediaQuery);
  mediaQuery.addListener(mediaChanges);


});
