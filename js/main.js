$(document).ready(function () {
    $(window).scroll(function () { 
        
$('nav').toggleClass('scrolled',$(this).scrollTop()>50);

    });

$('.faqbtn').click(function(){
$('.loadevent').load('faq.html');


});





});