class ConversationsController < ApplicationController
  def show
    conversation = Conversation.find_by_id(params[:id])
    if conversation.blank?
      render json: {error: "Please specify the conversation for the messages."}
    else
      render json: conversation, include: 'messages'
    end
  end
end