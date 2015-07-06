$(function(){
    "use strict";
    (function animateButton(){
        
        $('.press-here-down').animate({
           bottom:'8px',
        }, 1900,function(){
            $(this).animate({
                bottom:'8px',
            },1900,function(){
                animateButton();
            });
        });
    })();  

    $(".Start-jurny, .press-here-down").click(function(){
        $("html,body").animate({scrollTop:500});
    });  
    $('#carouselHacked').carousel();
$('.text-center.yahoo').hover(function(){

    $(".tooltip-yahoo").toggle(100);
});
    $('.text-center.Bookmark').hover(function(){
    $("#maan-service-Bookmark").toggle();
    $('.Bookmark1').toggle();
        $(".tooltip-bookmart").slideToggle(300);
}); 
    $('.text-center.seeker').hover(function(){
    $("#maan-service-seeker").toggle();
    $('.seeker1').toggle(); 
        $(".tooltip-job-seeker").slideToggle(300);
    });
    
    $('.text-center.Handle').hover(function(){
    $("#maan-service-Handle").toggle();
    $(".Handle1").toggle();
        $(".tooltip-Handle").slideToggle(300);
});  
    $('.text-center.Book-04').hover(function(){
    $("#maan-service-Book-04").toggle();
    $(".Book-041").toggle();
        $(".tooltip-English-book").slideToggle(300);
});  
    $('.text-center.magazine').hover(function(){
    $("#maan-service-magazine").toggle();
    $(".magazine1").toggle();
        $(".tooltip-magazine").slideToggle(300);
});
  
});



