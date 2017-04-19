$(document).ready(function(){
  $('.confirmation').on('click','button',function() {
    $(this).closest('.confirmation').find('.ticket').slideToggle();
  });
});