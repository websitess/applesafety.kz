$(function(){
    $('.col--phone .more--btn').on('click', function(){
        var phone = document.querySelector('.col--phone ul');
        if($(phone).is(':visible')){
            $(phone).slideUp();
            $(this).removeClass('open');
        }
        else{
            $(phone).slideDown();
            $(this).addClass('open');
        }
    });
    $('.langs').on('click', function(){
        var langs = document.querySelector('.langs ul');
        if($(langs).is(':visible')){
            $(langs).slideToggle();
        }
        else{
            $(langs).slideToggle();
        }
    });

    $('.nav--btn').on('click', function(){
        console.log('clicked');
        var menu = document.querySelector('header .nav');
        if($(menu).is(':visible')){
            $(menu).slideUp();
            $(this).removeClass('open');
        }
        else{
            $(menu).slideDown();
            $(this).addClass('open');
        }
    });

    $('.phone--btn').on('click', function(){
        console.log('clicked');
        var menu = document.querySelector('header .col--phone');
        if($(menu).is(':visible')){
            $(menu).slideUp();
            $(this).removeClass('open');
        }
        else{
            $(menu).slideDown();
            $(this).addClass('open');
        }
        return false;
    });

    $('.slider').slick({
        dots: true,
        arrows: true,
        speed: 2000,
        slideToShow: 1,
        autoplay: true
   });

   $('.reviews-slider').slick({
        autoplay: true,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }       
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }            
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }            
            }
        ]
    });

    $('.partners-slider').slick({
        autoplay: true,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }       
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }            
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }            
            }
        ]
    });

     // Scroll to top
     if ($('.back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});

$(function(){
  
})

  // Modal
  $(document).ready(function() {
    $('.open--modal').on('click', function(){
        var link = $(this).attr('data-modal');
        $(link).fadeIn();
        return false;
    });

    $('.modal .close, .modal__layer').on('click', function() {
        $(this).parents('.modal, .mobile-contacts').fadeOut();
        return false;	
    });

    $('[name="tel"]').inputmask('+7 (999) 999-99-99');
    
});