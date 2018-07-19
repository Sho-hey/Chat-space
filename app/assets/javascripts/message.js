$(function(){
  function buildHTML(message){
    var insertImage = '';
    if (message.image.url) {
      insertImage = `<img class= "message__image" src="${message.image.url}">`;
    };
    var html = `<div class= "message_user-name">
                ${message.user_name}</div>
                <div class= "message__day">
                ${message.created_at}</div>
                <div class= "message_center-box"></div>
                <div class= "message_message">
                  ${message.body}
                  ${insertImage}
                  </div>
                <div class= "message_bottom-box"></div>`
    return html;
  };

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".message").append(html);
      $(".form_textbox").val('');
      $(".hidden").val('');
    });
    return false;
  });
});
