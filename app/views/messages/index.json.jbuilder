json.array! @new_messages.each do |message|
  json.body       message.body
  json.image      message.image.url
  json.id         message.id
  json.created_at simple_time(message.created_at)
  json.user_name  message.user.name
end
