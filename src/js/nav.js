$(function() {
    $(window).scroll(function(){
        if($(window).scrollTop() <=40){
            $('.nav').removeClass('scroll_navbar');
        }else {
            $('.navbar').addClass('scroll_navbar');
        }
    })
})