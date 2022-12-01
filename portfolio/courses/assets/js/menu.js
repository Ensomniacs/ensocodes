$(window).on('resize', function() {
    if($(window).width() > 900) {
        $('#header').addClass('index');
        $('#header').removeClass('inline');
    }else{
        $('#header').addClass('inline');
        $('#header').removeClass('index');
    }
})
