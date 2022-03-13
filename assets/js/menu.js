function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

    // back to top
jQuery(document).ready(function() {
        var offset = 220;
        var duration = 500;
      jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
      });
    
      jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
      })
    });

      // niceScroll
        $("html").niceScroll({
          scrollspeed: 50,
          mousescrollstep: 45,
        });

        $(function() {
          $('a.page-scroll').bind('click', function(event) {
              var $anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $($anchor.attr('href')).offset().top
              }, 1000);
              event.preventDefault();
          });
      });