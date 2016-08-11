/**
 * Created by Simon on 8/11/16.
 */
// script.js

$(function() {

    $("button").click(function() {
        $('#box').fadeOut(1000);
    });

    /* ----------------
     jQUERY ANIMATE
     ---------------- */

    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
            // animation is complete
        });
    });

    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            // animation is complete
        });
    });

    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // animation is complete
        });
    });

    $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
            // animation is complete
        });
    });

    /* ----------------
     jQUERY CSS
     ---------------- */

    $('#circle2').css({
        'background':'#8a8d22',
        'display':'inline-block',
        'color':'white',
        'text-align':'center',
        'line-height':'140px',
        'height':'140px',
        'width':'140px'
    }).addClass('circleShape');

});


















