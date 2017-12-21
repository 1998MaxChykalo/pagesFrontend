
$(function(){
    var slider = {
        holder : $('.holder'),
        counter : 1,
        slides : $('.slide').length,
        animationTime : 1000,
        slide : function(ev) {
            slider.holder.on('click', function(ev) {
                slider.next();
            });
        },
        next : function() {
            if(slider.counter < slider.slides) {
                slider.counter++;
                slider.holder.animate({'margin-left' : "-=100%"}, slider.animationTime);
            } else {
                slider.holder.animate({'margin-left' : '0'}, slider.animationTime);
                slider.counter = 1;
            }
        },
        prev : function() {
            if(slider.counter > 1) {
                slider.counter--;
                slider.holder.animate({'margin-left' : '+=100%'}, slider.animationTime);
            } else {
                slider.counter = 3;
                slider.holder.animate({'margin-left' : '-='+(slider.slides - 1)*100+'%'}, slider.animationTime);
            }
        }
        
    };
    $('.prev').on('click',slider.prev);
    $('.next').on('click',slider.next);
    slider.slide();
});