$(function(){

  var search_user = $("#user-search-result");
  var add_to_user = $("#user-add-result");

  function appendUser(user) {
    var html = `<div class= "chat-group-user clearfix">
                  <p class= "chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    search_user.append(html);
  }

  function appendNoUser(user) {
    var html = `<div class= "chat-group-user.clearfix">${user}</div>`
    search_user.append(html);
  }

  function appendChatMember(user) {
    var user_name = user.attr("data-user-name");
    var user_id = user.attr("data-user-id");
    var haml = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                  <p class='chat-group-user__name'>${user_name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn data-user-id="${user_id}"'>削除</a>
                  </div>`
    add_to_user.append(haml);
  }


  $('.chat-group-form__input').on("keyup", function(){
    var input = $("#user-id-data").val();

    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
       users.forEach(function(user){
         appendUser(user);
       })
      }
      else {
       appendNoUser("一致するユーザーはいません");
      }
    })
    .fail(function() {
      alert('エラー');
    })
  })
   $(document).on("click",".chat-group-user__btn--add", function(){
     var user = $(this);
     appendChatMember(user);
     user.parent().remove();
    });
   $(document).on("click", ".js-remove-btn", function(){
     var user = $(this).closest('div').remove();;
   })
});
