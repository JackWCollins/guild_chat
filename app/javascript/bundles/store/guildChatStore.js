import { createStore, applyMiddleware, compose } from 'redux';
import guildChatReducer from '../reducers/guildChatReducer';
import thunk from 'redux-thunk';

const configureStore = (railsProps) => (
  createStore(guildChatReducer, railsProps, applyMiddleware(thunk))
);

export default configureStore;
