import { combineReducers } from 'redux';
import { USER_LOGIN, USER_LOGOUT, LOAD_CONVERSATIONS_REQUEST, LOAD_CONVERSATIONS_SUCCESS } from '../actions/guildChatActionCreators';

const home = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, activeUserId: action.userId, activeUserName: action.userName };
    case USER_LOGOUT:
      return { ...state, activeUserId: null, activeUserName: null };
    case LOAD_CONVERSATIONS_REQUEST:
      return { ...state, loadingConversations: true, conversations: []};
    case LOAD_CONVERSATIONS_SUCCESS:
      return { ...state, loadingConversations: false, conversations: action.conversations};
    default:
      return state;
  }
};

const conversation = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, activeUserId: action.userId, activeUserName: action.userName };
    case USER_LOGOUT:
      return { ...state, activeUserId: null, activeUserName: null };
    default:
      return state;
  }
}

const guildChatReducer = combineReducers({ home });

export default guildChatReducer;
