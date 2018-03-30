class MessagesController < ApplicationController
  def index
    conversation = Conversation.find_by_id(message_params[:conversation_id])
    if conversation.blank?
      render json: {error: "Please specify the conversation for the messages."}
    end
  end

  def create
    message = Message.new(message_params)
    if message.save
    else
      render json: {error: "There was an error creating the message: #{message.errors.full_messages.first}"}
    end
  end

  def destroy
    message = Message.find_by_id(params[:id])
    if message.destroy
      render json: {id: message.id}
    else
      render json: {error: "There was an error deleting this message"}
    end
  end

  private

  def message_params
    params.permit(:body, :user_id, :conversation_id)
  end
end