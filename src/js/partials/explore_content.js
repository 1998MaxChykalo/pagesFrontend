
$(function(){
    $(window).resize(function(){
        var windowWidth = $(window).width();
    
        if(windowWidth < 768) {
            replaceClasses($('.explore+.row>.title'),'col-5','col-12');
            replaceClasses($('.explore+.row>.description'),'col-7','col-12');
            $('.explore').addClass('col-12');
        }
        else {
            replaceClasses($('.explore+.row>.title'),'col-12','col-5');
            replaceClasses($('.explore+.row>.description'),'col-12','col-7');
            $('.explore').removeClass('col-12');
        }
    
        function replaceClasses(element,oldClass,newClass) {
            if(!("" + oldClass) || !("" + newClass)) throw "Error, class name must be string";
            if(!element.addClass) throw "Error, element must be jQuery object!!!";
            element.removeClass(oldClass).addClass(newClass);
        }
    });
    $(window).trigger('resize');
});