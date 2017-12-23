$(function(){
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("header").addClass("dark");
            $('img.logo').first().removeClass('showed').addClass('hidden');
            $('logoimg:eq(1).logo').removeClass('hidden').addClass('showed');
        }
        else {
            $("header").removeClass("dark");
            $('img.logo').first().removeClass('hidden').addClass('showed');
            $('img:eq(1).logo').removeClass('showed').addClass('hidden');
        }
    });
    $('#menu').on('click', function() {
        $('nav.nav-bar ul li').fadeToggle(1000);
        $('nav.nav-bar ul').toggleClass('littleMenu');
    });
});