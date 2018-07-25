json.body @message.body
json.image @message.image.url
json.user_name @message.user.name
json.created_at simple_time(@message.created_at)
json.id @message.id
