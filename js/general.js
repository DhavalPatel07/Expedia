var $=jQuery.noConflict();
$(document).ready(function(){
	// Click to Scroll To Section
    $('a[href*=\\#]:not([href=\\#])').click(function(e){
        //console.log('click');
        e.preventDefault();       
        var target_name = $(this).attr('href');                
        var tar_hash = target_name.substr(target_name.indexOf('#'),target_name.length);        
        if($('body').find(tar_hash).length > 0){                        
            if(target_name.length){
                $('html,body').animate({ scrollTop: $(tar_hash).offset().top  }, 1000);
            }
        }
        else {window.location.href = target_name; }
    });
    // Animation
    (function($) {
      $.fn.visible = function(partial) {var $t = $(this), $w = $(window), viewTop = $w.scrollTop(), viewBottom = viewTop + $w.height(), _top = $t.offset().top, _bottom = _top + $t.height(), compareTop = partial === true ? _bottom : _top, compareBottom = partial === true ? _top : _bottom; return ((compareBottom <= viewBottom) && (compareTop >= viewTop)); }; })(jQuery); var win = $(window); var allMods = $(".animation-effect"); allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {el.addClass("come-in"); }; }); win.scroll(function(event) {allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {setTimeout(function(){el.addClass("come-in"); }, 600); }; /*else {el.removeClass("come-in"); } */ });
    });
    $('#ClientReview').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
    });

    $('.nav-container input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $('body').addClass("hide-scroll");
        } else {
            $('body').removeClass("hide-scroll");
        }
    });

});