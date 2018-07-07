## usersテーブル

|Column|Type|Options|
|------|----|------|
|name|string|null: false, index: true|

### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members




## groupsテーブル

|Column|Type|Options|
|------|----|------|
|name|string|null: false|

### Association
- has_many :users, through: :members
- has_many :messages
- has_many :members



## messagesテーブル

|Column|Type|Options|
|------|----|------|
|user_id|integer|:user, null: false, foreign_key: true|
|group_id|integer|:group, null: false, forein_keys: true|
|body|text||
|image|text||

### Association
- belongs_to :user
- belongs_to :group



## membersテーブル

|Column|Type|Options|
|------|----|------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user
