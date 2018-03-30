import { createStore } from 'redux';
import guildChatReducer from '../reducers/guildChatReducer';

const configureStore = (railsProps) => (
  createStore(guildChatReducer, railsProps)
);

export default configureStore;
