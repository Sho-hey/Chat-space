$(function() {
  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      processData: false,
      contentType: false
    })
  });
});

// message = $('.form_textbox').val();
// console.log(message);


// $(function(){
//   $('#new_comment').on('submit', function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
      // processData: false,
      // contentType: false
//     })
//   })
