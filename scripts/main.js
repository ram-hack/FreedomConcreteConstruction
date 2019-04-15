$(document).ready(function() {
  $(document).scroll(function(){
// change if statement math later when more content on Page. account for height of window
    if($("#header-container").offset().top -100 <= $(document).scrollTop()){
      $("#trowel-container").css("left","120vw");
    }
  });

  function mediaChanges(mediaQuery) {
    if (mediaQuery.matches){

    }else{
      console.log("not in query");
    }
  }
  var mediaQuery = window.matchMedia("(max-width:800px)");
  mediaChanges(mediaQuery);
  mediaQuery.addListener(mediaChanges);


});
