class UsersController < ApplicationController
  def conversations
    user = User.find_by_id(params[:id])
    if user.present?
      render json: user.conversations, include: 'messages,users'
    else
      render json: {error: "Please specify the user for the conversations."}
    end
  end
end