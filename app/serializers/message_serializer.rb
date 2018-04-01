class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :user
end
