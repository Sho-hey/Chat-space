## usersテーブル

|Column|Type|Options|
|------|----|------|
|name|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups



## groupsテーブル

|Column|Type|Options|
|------|----|------|
|name|string|null: false|

### Association
- has_many :users
- has_many :messages



## messagesテーブル

|Column|Type|Options|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, forein_keys: true|
|body|text|null: false|
|image|text||
|created_at|timestamps|null: false|

### Association
- belongs_to :user
- belongs_to :group



## membersテーブル

|Column|Type|Options|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user
