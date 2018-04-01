import { combineReducers } from 'redux';
import {
  USER_LOGIN,
  USER_LOGOUT,
  LOAD_CONVERSATIONS_REQUEST,
  LOAD_CONVERSATIONS_SUCCESS,
  SELECT_CONVERSATION,
  NEW_MESSAGE_RECEIVED
} from '../actions/guildChatActionCreators';

const home = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, activeUserId: action.userId, activeUserName: action.userName, loading: true };
    case USER_LOGOUT:
      return { ...state, activeUserId: null, activeUserName: null };
    case LOAD_CONVERSATIONS_REQUEST:
      return { ...state, loading: true, conversations: []};
    case LOAD_CONVERSATIONS_SUCCESS:
      return { ...state, loading: false, conversations: action.conversations, activeConversationId: action.conversations[0].id};
    case SELECT_CONVERSATION:
      return { ...state, activeConversationId: action.conversationId};
    case NEW_MESSAGE_RECEIVED:
      let conversation = state.conversations.find((c) => c.id === action.message.conversation_id);
      let updatedConversations = state.conversations.map((convo) => {
        if (conversation && convo.id === conversation.id) {
          let messages = conversation.messages.concat([action.message]);
          return { ...convo, messages: messages }
        } else {
          return convo
        }
      });
      return { ...state, conversations: updatedConversations};
    default:
      return state;
  }
};

const guildChatReducer = combineReducers({ home });

export default guildChatReducer;
