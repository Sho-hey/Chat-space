FactoryGirl.define do
  factory :message do
    body Faker::Lorem.sentence
    image File.open("#{Rails.root}/spec/fixtures/wavelunch.jpg")
    user
    group
  end
end
