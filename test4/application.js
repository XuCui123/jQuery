// $(document).ready(function(){
//   $('.confirmation').on('click','button',function() {
//     $(this).closest('.confirmation').find('.ticket').slideToggle();
//   });
//   $('.confirmation').on('mouseover','h2',function() {
//     $(this).closest('.confirmation').find('.ticket').slideToggle();
//   });
// });


function showTicket() {
  $(this).closest('.confirmation').find('.ticket').slideToggle();
}
$(document).ready(function(){
  $('.confirmation').on('click','button',showTicket);
  $('.confirmation').on('mouseover','h2',showTicket);
});