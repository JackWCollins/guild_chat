class User < ApplicationRecord
  has_many :messages
  has_many :user_conversations
  has_many :conversations, through: :users

  def full_name
    "#{first_name} #{last_name}"
  end
end