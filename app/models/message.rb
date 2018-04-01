class Message < ApplicationRecord
  belongs_to :user
  belongs_to :conversation

  after_create :broadcast
  validates_presence_of :body, message: "Please enter something to send!"

  private

  def broadcast
    ActionCable.server
        .broadcast('message_channel', id: id, body: body, conversation_id: conversation_id, user: user)
  end
end