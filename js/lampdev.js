/**
 * Created by KRM on 8/19/15.
 */

$('.portfolio_slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$('.fdbk_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});


// Smooth scroll + dropdown & collapse-nav closing trick

$(document).ready(function() {

    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -30
        }, 1500);

        $('.collapse').removeClass('in');

    });
});





$(document ).ready( function() {
    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });


    // bind filter button click
    $('#filters').on( 'click', 'a', function() {
        console.log("Be-e-eee!");
        var filterValue = $( this ).attr('data-filter');
        //filterValue = filterFns[ filterValue ] || filterValue;
        $container.isotope({ filter: filterValue });
    });

});

