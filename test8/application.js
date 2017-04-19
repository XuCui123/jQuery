// $(document).ready(function() {
//   $('.vacations').on('click','.vacation',function() {
//     $(this).css({'background-color':'yellow',
//       'border':'1px solid red'});
//     $(this).find('.price').show();
//     $(this).animate({'top':'-10px'});
//   });
// });

$(document).ready(function() {
  $('.vacations').on('click','.vacation',function() {
    $(this).css({'background-color':'yellow',
      'border':'1px solid red'});
    $(this).find('.price').show();
    $(this).toggleClass('green');
    if($(this).hasClass('green')) {
      $(this).animate({'top':'-10px'});
    } else {
      $(this).animate({'top':'0px'});
    }
  });
});