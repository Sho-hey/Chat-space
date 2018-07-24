$(function(){
  function buildHTML(message){
    var insertImage = '';
        message.image.url? insertImage = (`<img class= "message__image" src="${message.image.url}">`) : (insertImage = ``);
    var html = `<div class= "message">
                <div class= "message_user-name">
                ${message.user_name}</div>
                <div class= "message__day">
                ${message.created_at}</div>
                <div class= "message_center-box"></div>
                <div class= "message_message">
                  ${message.body}
                  ${insertImage}
                  </div>
                <div class= "message_bottom-box"></div>
                <div>`
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
      $(".main").append(html);
      $('.main').animate({scrollTop: $('.main')[0].scrollHeight}, 'fast');
      $(".form_textbox").val('');
      $(".image").val('');
    })
    .fail(function(data){
      alert('error');
    })
    return false;
  });
  setInterval(function(){
    $.ajax({
      url: location.href.json,
    })
    .done(function(data) {
      var insertHTML = "";
      json.messages.forEach(function(message) {
        insertHTML += buildHTML(message);
      });
      $("#message-all").html(insertHTML);
    })
    .fail(function(data) {
      alert("自動更新に失敗しました");
    });
  });
});

