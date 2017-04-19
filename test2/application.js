$(document).ready(function(){
  $('button').on('click',function() {
    var price = $('<p>From $399.99</p>');
    // $(this).after(price);
    $(this).closest('#vacation').append(price);
    $(this).remove();
  })
});