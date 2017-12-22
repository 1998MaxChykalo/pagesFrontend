
$(function(){
    $(window).on("scroll", function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 100) {
            $("header").addClass("dark");
            $('img').first().removeClass('showed').addClass('hidden');
            $('img:eq(1)').removeClass('hidden').addClass('showed');
        }
        else {
            $("header").removeClass("dark");
            $('img').first().removeClass('hidden').addClass('showed');
            $('img:eq(1)').removeClass('showed').addClass('hidden');
        }
    });
});