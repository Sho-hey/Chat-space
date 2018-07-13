class MessagesController < ApplicationController
  def index
  end

  def create
    @message = Message.new(message_params)
    redirect root_path
  end

  private
  def message_params
    params.permit(:image, :body)
  end

end
