var clics = 0;

$(document).ready(function() {

  $('.answer').hide();
  $('#closeall').hide();

  $('h3').click(function() {

    $(this).next('.answer').toggle(function() {

      $(this).next('.answer');

    }, function() {

      $(this).next('.answer').fadeIn('fast');

    });

    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
    } else {
      $(this).addClass('close');
    };

    if ($('.close').length >= 3) {

      $('#closeall').fadeIn('fast');

    } else {
      $('#closeall').hide();
      var abiertas = $('.close').length
      console.log(abiertas);
    }
  }); //Close Function Click	            

}); //Close Function Ready

$('#closeall').click(function() {
  $('.answer').fadeOut(200);
  $('h3').removeClass('close');
  $('#closeall').fadeOut('fast');
});