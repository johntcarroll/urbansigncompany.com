

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


    if (/success=true/.test(window.location.search)) {
        $('.alert--success').show();
        $("html, body").scrollTop($(document).height());
    }

    jQuery.validator.addMethod("validEmail", function(value, element) {
        if(value == '')
            return true;
        var temp1;
        temp1 = true;
        var ind = value.indexOf('@');
        var str2=value.substr(ind+1);
        var str3=str2.substr(0,str2.indexOf('.'));
        if(str3.lastIndexOf('-')==(str3.length-1)||(str3.indexOf('-')!=str3.lastIndexOf('-')))
            return false;
        var str1=value.substr(0,ind);
        if((str1.lastIndexOf('_')==(str1.length-1))||(str1.lastIndexOf('.')==(str1.length-1))||(str1.lastIndexOf('-')==(str1.length-1)))
            return false;
        str = /(^[a-zA-Z0-9]+[\._-]{0,1})+([a-zA-Z0-9]+[_]{0,1})*@([a-zA-Z0-9]+[-]{0,1})+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,3})$/;
        temp1 = str.test(value);
        return temp1;
    });

    jQuery.validator.addMethod("validPhone", function(value, element) {
        if(value == '')
            return true;

        return /^\d[0-9-]*\d$/.test(value);
    });

    var formContact = $('#form-contact');

    var formValidation = formContact.validate({

        submitHandler: function(form) {
            // do other things for a valid form
            if (grecaptcha.getResponse().length) {
                form.submit();
            } else {

            }
        },

        invalidHandler: function() {
            if (formValidation.numberOfInvalids() > 0) {
                formContact.addClass('form-has-error');
            } else {
                formContact.removeClass('form-has-error');
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element).closest('.js-validation').addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element).closest('.js-validation').removeClass(errorClass).addClass(validClass)
        },
        errorPlacement: function(error, element) {
            return false;
        },
        rules: {
            'email': {
                required: true,
                validEmail: true
            },
            'phone': {
                required: true,
                validPhone: true
            }
        }
    });
    $('input[type="radio"]').on('click', function() {
        formContact.validate().element( this );
    });
    $('select').on('change', function() {
        formContact.validate().element( this );
        formContact.validate().element( $('.selectize-input input') );
    });
});
