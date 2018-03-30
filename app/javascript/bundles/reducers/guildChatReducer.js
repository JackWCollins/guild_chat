import { combineReducers } from 'redux';
import { USER_LOGIN, LOAD_USERS_SUCCESS } from '../actions/guildChatActionCreators';

const home = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, activeUserId: action.userId, activeUserName: action.userName };
    default:
      return state;
  }
};

// const users = (state = {}, action) => {
//   switch (action.type) {
//     case LOAD_USERS_SUCCESS:
//       return { ...state, users: action.users };
//     default:
//       return state;
//   }
// };

const guildChatReducer = combineReducers({ home });

export default guildChatReducer;
