require 'rails_helper'

Rspec.describe "messages_controller", type: :request do
  context "#index" do
    context "with a valid conversation_id" do
      conversation = Conversation.create
      steven = create(:user, first_name: "Steven")
      kevin = create(:user, first_name: "Kevin")
      steven_message = steven.messages.create(body: "Do you want to go snowboarding later?", conversation: conversation)
      kevin_message = kevin.messages.create(body: "Let's do it!", conversation: conversation)
      get :index, params: {conversation_id: conversation.id}
      expect(response.status).to be 200
      json = JSON.parse(response.body)
      expect(json.length).to eq 2
    end
  end
end