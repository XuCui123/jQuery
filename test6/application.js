// $(document).ready(function() {
//   $('.vacation').on('click','.expand',function() {
//     $(this).closest('.vacation').find('.comments').fadeToggle();
//   });
// });


$(document).ready(function() {
  $('.vacation').on('click','.expand',
    function(event) {
      event.preventDefault();
      $(this).closest('.vacation').find('.comments').fadeToggle();
    }
  );
});