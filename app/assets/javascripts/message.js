$(function() {
  // function buildHTML(message){

  //   var html = `<div class= "message">
  //                 <div class= "message_user-name">
  //                  ${message.user.name}</div>
  //                 <div class= "message__day">
  //                  ${message.created_at}</div>
  //                 <div class= "message_center-box"></div>
  //                 <div class= "message_message">
  //                 <div class= "message.body">`
  // };
  $('.new_message').submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      processData: false,
      contentType: false
    });
    // .done(function(data) {
    //   var html = buildHTML(data);
    //   $()
    // })
  });
});


// .message
//   .message_user-name
//     = message.user.name
//   .message__day
//     = message.created_at
//   .message_center-box
//   .message_message
//     - if message.body.present?
//       = message.body
//     = image_tag message.image.url, class: 'message__image' if message.image.present?
//   .message_bottom-box


//   <script>
// var score = 90;
// if (score >= 80) {
// document.write(“合格です！おめでとうございます！”) ;
// }
// </script>
