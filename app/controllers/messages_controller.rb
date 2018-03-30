class MessagesController < ApplicationController
  def create
    if message_params[:body].blank?
      render json: {error: "There was an error creating the message: Please enter a message body"}, status: :bad_request
      return
    end

    message = Message.new(message_params)
    if message.save
      render json: message
    else
      render json: {error: "There was an error creating the message: #{message.errors.full_messages.first}"}, status: :bad_request
    end
  end

  def destroy
    message = Message.find_by_id(params[:id])
    if message.destroy
      render json: {id: message.id}
    else
      render json: {error: "There was an error deleting this message"}, status: :bad_request
    end
  end

  private

  def message_params
    params.permit(:body, :user_id, :conversation_id)
  end
end