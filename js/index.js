$(document).ready(function(){
    $('#slider-look-book').owlCarousel({
        loop:true,
        dots:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
    $('.slider-brands').owlCarousel({
        loop:true,
        autoWidth:true,
        center:true,
        responsive:{
            0:{
                items:3,
            },
            576:{
                items:5,
            },
            992:{
                items:4,
            },
            1200:{
                items:5,
            }
        }
    });
    $('.menu-bars').click(function(e){
        e.preventDefault();
        $('.menu-center').css('display','block');
        return false;
    });
    $('.menu-center-exit').click(function(e){
        e.preventDefault();
        $('.menu-center').hide();
    });
    $('.search-tablet').on('click',function(e) {
        e.preventDefault();
        $(".search-desk").slideToggle();
    });
});
