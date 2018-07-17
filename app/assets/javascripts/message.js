$(function() {
  $('.form').on('submit', function(e) {
    e.preventDefault();
    message = $('.form_textbox').val();
    console.log(message);
  });
});
