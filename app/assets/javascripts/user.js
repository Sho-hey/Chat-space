$(function(){

  var search_user = $("#user-search-result");

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



  $('.chat-group-form__input').on("keyup", function(){
    var input = $("#user-search-field").val();

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
       });
      }
      else {
       appendNoUser("一致するユーザーはいません");
      }
    })
    .fail(function() {
      alert('エラー');
    })
  })
});
