$(document).ready(function() {
   function fullScreen() {
       var fullScreen = $(window).innerHeight();
       $(".intro").css("min-height", fullScreen)
   }
   fullScreen();
   $(window).resize(function() {
       fullScreen();
   });
    
});
