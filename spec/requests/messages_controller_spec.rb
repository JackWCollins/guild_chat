require 'rails_helper'

describe MessagesController, type: :request do
  context "#create" do
    context "with valid params" do
      it "creates a message" do
        conversation = Conversation.create
        steven = create(:user, first_name: "Steven")
        kevin = create(:user, first_name: "Kevin")
        post messages_path, params: {conversation_id: conversation.id, user_id: steven.id, body: "Awesome! See you in an hour."}
        expect(response.status).to eq 200
        json = JSON.parse(response.body)
        expect(json['body']).to eq "Awesome! See you in an hour."
        new_message = Message.find_by_id(json['id'])
        expect(new_message.body).to eq "Awesome! See you in an hour."
        expect(new_message.conversation).to eq conversation
      end
    end

    context "with invalid params" do
      it "does not save without a conversation id" do
        steven = create(:user, first_name: "Steven")
        expect {
          post messages_path, params: {conversation_id: nil, user_id: steven.id, body: "Awesome! See you in an hour."}
        }.not_to change { Message.count }
        expect(response.status).to eq 400
        json = JSON.parse(response.body)
        expect(json['error']).to eq "There was an error creating the message: Conversation must exist"
      end

      it "does not save without a user id" do
        conversation = Conversation.create
        expect {
          post messages_path, params: {conversation_id: conversation.id, user_id: nil, body: "Awesome! See you in an hour."}
        }.not_to change { Message.count }
        expect(response.status).to eq 400
        json = JSON.parse(response.body)
        expect(json['error']).to eq "There was an error creating the message: User must exist"
      end

      it "does not save without a message body" do
        conversation = Conversation.create
        steven = create(:user, first_name: "Steven")
        expect {
          post messages_path, params: {conversation_id: conversation.id, user_id: steven.id, body: nil}
        }.not_to change { Message.count }
        expect(response.status).to eq 400
        json = JSON.parse(response.body)
        expect(json['error']).to eq "There was an error creating the message: Please enter a message body"
      end
    end
  end
end