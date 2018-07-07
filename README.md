# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

#usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups



#groupsテーブル

|Column|Type|Option|
|------|----|------|
|group|string|null: false|

### Association
- has_many :users
- has_many :messages



#messagesテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, forein_keys: true|
|body|text|null: false|
|image|text||
|created_at|timestamps|null: false|

### Association
- belongs_to :user
- belongs_to :group



#membersテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user
