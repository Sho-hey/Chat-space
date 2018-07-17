require 'rails_helper'
describe Message do
  describe '#create' do
    context 'can save' do
      it "is valid with body" do
        message = build(:message, image: "")
        expect(message).to be_valid
      end
      it "is valid with image" do
        message = build(:message, body: "")
        expect(message).to be_valid
      end
      it "is valid with body, image" do
        message = build(:message)
        expect(message).to be_valid
      end
    end
    context "can't save" do
      it "is invalid without body, image" do
        message = build(:message, image: "", body: "")
        message.valid?
        expect(message.errors[:body]).to include("を入力してください")
      end
      it "is invalid without group_id" do
        message = build(:message, group_id: "")
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end
      it "is invalid without user_id" do
        message = build(:message, user_id: "")
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end

# require 'rails_helper'

# RSpec.describe Message, type: :model do
#   describe '#create' do
#     context 'can save' do
#       it 'is valid with body' do
#         expect(build(:message, image: nil)).to be_valid
#       end

#       it 'is valid with image' do
#         expect(build(:message, body: nil)).to be_valid
#       end

#       it 'is valid with content and image' do
#         expect(build(:message)).to be_valid
#       end
#     end

#     context 'can not save' do
#       it 'is invalid without content and image' do
#         message = build(:message, body: nil, image: nil)
#         message.valid?
#         expect(message.errors[:body]).to include('を入力してください')
#       end

#       it 'is invalid without group_id' do
#         message = build(:message, group_id: nil)
#         message.valid?
#         expect(message.errors[:group]).to include('を入力してください')
#       end

#       it 'is invaid without user_id' do
#         message = build(:message, user_id: nil)
#         message.valid?
#         expect(message.errors[:user]).to include('を入力してください')
#       end
#     end
#   end
# end
