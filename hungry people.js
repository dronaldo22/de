$(document).ready(function(){
    $('.rev_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    });
$(document).ready(function(){

    $('#SOUPE').click(function(){
        $.ajax({
            url: "page1.html",
            cache: false,
            success: function(html){
                $("#menu1").html(html);
            }
        });
    });

    $('#PIZZA').click(function(){
        $.ajax({
            url: "page2.html",
            cache: false,
            success: function(html){
                $("#menu1").html(html);
            }
        });
    });
    $('#PASTA').click(function(){
        $.ajax({
            url: "page3.html",
            cache: false,
            success: function(html){
                $("#menu1").html(html);
            }
        });
    });
    $('#DESERT').click(function(){
        $.ajax({
            url: "page4.html",
            cache: false,
            success: function(html){
                $("#menu1").html(html);
            }
        });
    });
    $('#DRINKS').click(function(){
        $.ajax({
            url: "page5.html",
            cache: false,
            success: function(html){
                $("#menu1").html(html);
            }
        });
    });

});

