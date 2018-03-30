import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../actions/guildChatActionCreators';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const guildChatReducer = combineReducers({ name });

export default guildChatReducer;
