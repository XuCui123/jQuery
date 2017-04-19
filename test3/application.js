
$(document).ready(function(){
  $('.getprice').on('click',function() {
    var vacation = $(this).closest('.vacation');
    var amount = vacation.data('price');
    var price = $('<p>From $'+amount+'</p>');
    vacation.append(price);
    $(this).remove();
  });
  $('#filters').on('click','.onsale-filter',function() {
    $('.red').removeClass('red');
    $('.vacation').filter('.onsale').addClass('red');
  });
  $('#filters').on('click','.expiring-filter',function() {
    $('.red').removeClass('red');
    $('.vacation').filter('.expiring').addClass('red');
  });
});