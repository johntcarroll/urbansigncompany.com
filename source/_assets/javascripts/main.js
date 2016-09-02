

// Menu

$(document).ready(function(){

    // Menu

    $(".js-menu").click(function(){
        $("body").toggleClass("menu-active"); return false;
    });


    $("input:file").change(function (){
       var fileName = $(this).val().split('\\').pop();
       $(".js-filename").html(fileName);
     });


    var showMore = $(".js-show-more");
        showMore.attr('data-pagination', 0);
    var perPage = 6;
    var card = $(".js-card");

    showMore.click(function(){
        var length = card.length;
        var pagination = parseFloat(showMore.attr('data-pagination')) + 1;


        if (length / perPage > pagination) {
            showMore.attr('data-pagination', pagination );
            card.each(function(i, c) {
                if (i <= (pagination * perPage) + perPage) {
                    card.eq(i).removeClass('is-hidden');
                }
            });

            if (length <= (pagination * perPage) + perPage) {
                showMore.remove();
            }
        } else {
            showMore.remove();
        }
    });

    // Arrow


    $('.banner__arrow-link').click( function(){
    var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
        }
        return false;
    });

    // Calendar


    $("#datepicker").datepicker();

    // Select

    $('select').selectize({
       placeholder: "position applied for"
    });

    // Validation

    $('#form-contact').validate();
});

 