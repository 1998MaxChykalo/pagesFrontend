$(function(){
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("header").addClass("dark");
            $('.logo img').first().removeClass('showed').addClass('hidden');
            $('.logo img:eq(1)').removeClass('hidden').addClass('showed');
        }
        else {
            $("header").removeClass("dark");
            $('.logo img').first().removeClass('hidden').addClass('showed');
            $('.logo img:eq(1)').removeClass('showed').addClass('hidden');
        }
    });
    $('#menu').on('click', function() {
        $('nav.nav-bar ul li').fadeToggle(1000);
        $('nav.nav-bar ul').toggleClass('littleMenu');
    });
});