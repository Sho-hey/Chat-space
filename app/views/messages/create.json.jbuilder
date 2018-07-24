json.body @message.body
json.image @message.image.url
json.user_id @message.user.id
json.group_id @message.group.id
json.user_name @message.user.name
json.created_at simple_time(@message.created_at)
