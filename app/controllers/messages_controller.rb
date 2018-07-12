class MessagesController < ApplicationController
  def index
  end

  def create
    Message.create(message_params)
  end

  private
  def message_params
    params.permit(:body, :image)
  end
end
