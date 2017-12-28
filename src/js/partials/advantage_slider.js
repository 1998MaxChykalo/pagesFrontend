$(function() {
    function Advantage_slider(swipeIcons){ 
        this.swipeIcons = swipeIcons;
        this.slide = function() {
            this.swipeIcons.on('click', function(ev) {
                var prevIndex = $('.swipe_icon_element.active').index();
                var curIndex = $(this).index();
                $('.swipe_icon_element.active').removeClass('active');
                $(this).addClass('active');
                var res = curIndex - prevIndex;
                $('.advantage_slider').animate({'margin-left': '-='+res+'00%'});
            }); 
        }
    }

    var slider = new Advantage_slider($('.swipe_icon_element'));
    slider.slide();
})