# Guild Chat

Welcome to the Guild Chat repo! This is a very simple messaging app for demo purposes only. I have hosted this on a Heroku hobby tier at https://guild-chat-app.herokuapp.com/. It might take a few seconds for the dyno to spin up on your first request. 

## Code breakdown

There are a few important models. Each `conversation` serves as a container for `messages` between two or more `users`. Currently the UI only supports two users per conversation, but since each `conversation has_many users` the data model could easily support group conversations.

#### React Frontend

The frontend is a React app with Redux for state management. The React code can be found in [`app/javascript/`](https://github.com/JackWCollins/guild_chat/tree/master/app/javascript) and follows the [React + Redux Container Pattern](http://www.thegreatcodeadventure.com/the-react-plus-redux-container-pattern/). The `containers/GuildChatContainer.js` along with the child `components/GuildChat` component is the main entry point for the app. We load `users` from the server and allow you to authenticate as any user just by clicking on the user name. In a real production app we would of course need to implement complete user authentication.

Once logged in as a user we will render the `UserConversations.jsx` component. This component displays the user's `conversations` that were loaded from the parent `UserConversationsContainer` container. Each conversation is rendered in a `Conversation` component which displays `ConversationMessages` as well as an input to send a new message.

We update the local state of the `Conversation` component as the user types in the text area. When the user clicks `Submit` we call the `sendMessage()` function defined in `actions/guildChatActionCreators.js`. This function returns another function using `react-thunk`. The returned function will dispatch the `SEND_MESSAGE_REQUEST` redux action, make a HTTP request to send the message to the server, and then dispatch a `SEND_MESSAGE_SUCCESS` redux action. In a real production app we would need to add an extra action for error handling. We process these actions within `reducers/guildChatReducer.js`. 

Creating the message is great, but we need to push the new message to the recipient as well. After any user logs in the `GuildChat.jsx` component will create a websocket connection to the server using Rails ActionCable. For simplicity we just create a single `MessageChannel` that will listen for any new messages. When we receive a new message we call the `newMessageReceived()` function defined in `actions/guildChatActionCreators.js` which is processed by `reducers/guildChatReducer.js`. Since this reducer will be called for ANY message creation we must check for a releveant conversation and, if present, add the new message to that conversation. This is immediately reflected in the UI.

#### Rails Backend

The Rails backend is pretty small and simple. On the initial request we serve up the React app through the `HomeController`. After that, the React app communicates to the server through a couple of API controllers in `users_controller` and `messages_controller`.

When a new `message` is created we `broadcast` that event through ActionCable in `Message#broadcast`. The message is then immediately pushed to any `subscribers` on the React app. 

## Tech Stack

* Rails 5.1 / Ruby 2.3.1
* React 16.3 built using Webpack and the `react_on_rails` gem
* Redux 3.7.2
* Redis
* ActiveModelSerializers

Testing:
* RSpec (`./spec`)
* Jest (`./app/javascript/test`)

## To-Dos

There are many things I didn't implement in the first pass through. Given more time and/or if this was a production project, I would add:

* Use [JSON Web Tokens](https://github.com/jwt/ruby-jwt) for real user authorization. 
* Use an authService to store the JWT in `localStorage` so that the user will remain logged in if they refresh the page.
* Allow users to create group conversations. The data model already supports this, as one `conversation` can have many `users` through `user_conversations`.
* Properly verify requests instead of just using `skip_before_action :verify_authenticity_token`
* Add a library like `MomentJS` to update the message times dynamically on the React app.