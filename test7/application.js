$(document).ready(function() {
  $('.vacations').on('click','.vacation',function() {
    $(this).css({'background-color':'yellow',
      'border':'1px solid red'});
    $(this).find('.price').show();
  });
});