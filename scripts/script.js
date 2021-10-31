console.log('wokie!')
// When scroll hide nav 
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('nav').addClass('hide');
    } else {
        $('nav').removeClass('hide');
    }
})