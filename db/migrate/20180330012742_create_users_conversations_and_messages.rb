class CreateUsersConversationsAndMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name

      t.timestamps
    end

    create_table :conversations do |t|
      t.timestamps
    end

    create_table :user_conversations do |t|
      t.integer :user_id
      t.integer :conversation_id

      t.timestamps
    end

    create_table :messages do |t|
      t.integer :user_id
      t.integer :conversation_id
      t.text :body

      t.timestamps
    end
    add_index :messages, :conversation_id
  end
end
