require 'rails_helper'

describe ConversationsController, type: :request do
  context "#show" do
    context "with a valid conversation_id" do
      it "returns all of the messages within a conversation" do
        conversation = Conversation.create
        steven = create(:user, first_name: "Steven")
        kevin = create(:user, first_name: "Kevin")
        steven_message = steven.messages.create(body: "Do you want to go snowboarding later?", conversation: conversation)
        kevin_message = kevin.messages.create(body: "Let's do it!", conversation: conversation)
        get conversation_path(conversation)
        expect(response.status).to be 200
        json = JSON.parse(response.body)
        expect(json['id']).to eq conversation.id
        expect(json['messages'].length).to eq 2
      end
    end
  end
end