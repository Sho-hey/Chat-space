$(function(){
  function buildHTML(message){
    var insertImage = '';
        message.image? insertImage = (`<img class= "message__image" src="${message.image}">`) : (insertImage = ``);
    var html = `<div class= "message" data-message-id = "${message.id}">
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

  function scroll(){
    $('.main').animate({scrollTop: $('.main')[0].scrollHeight}, 'fast');
  };

  $('#new_message').on('submit', function(e){
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
      $("#message-all").append(html);
      scroll();
      $(".form_textbox").val('');
      $(".image").val('');
    })
    .fail(function(data){
      alert('error');
    })
    return false;
  });
  var interval = setInterval(function() {
    if (window.location.pathname.match(/\/groups\/\d+\/messages/)) {
      var last_message_id = $(".message").last().data("messageId");
      $.ajax({
        url: location.pathname,
        type: "GET",
        dataType: "json",
        data: { id: last_message_id }
      })
    .done(function(data) {
      var insertHTML = "";
      data.forEach(function(message) {
        insertHTML = buildHTML(message);
        $("#message-all").append(insertHTML);
        scroll();
      });
      })
       .fail(function(data) {
      alert("自動更新に失敗しました");
    })
   }
   else {
    clearInterval(interval);
   }}
   , 5000 );
});
