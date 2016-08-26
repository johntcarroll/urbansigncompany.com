
$(document).ready(function(){
    $('.banner__arrow-link').click( function(){
    var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
        }
        return false;
    });
});


$(document).ready(function(){
    $(".js-menu").click(function(){
        $("body").toggleClass("menu-active"); return false;
    });
});

