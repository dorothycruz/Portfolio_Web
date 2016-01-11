$(document).ready(function() {
   function fullScreen() {
       var fullScreen = $(window).innerHeight();
       $(".intro").css("min-height", fullScreen)
   }
   fullScreen();
   $(window).resize(function() {
       fullScreen();
   });
    
     $("#changed").typed({
            strings: ["a friend", "a writer", "a model", "a designer", "human"],
            typeSpeed: 30
    });
    
    $(".resume_downa").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);
           
    });

});
