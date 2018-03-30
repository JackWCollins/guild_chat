import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/guildChatStore';
import GuildChatContainer from '../containers/GuildChatContainer';

const GuildChatApp = (props) => (
  <Provider store={configureStore(props)}>
    <GuildChatContainer />
  </Provider>
);

export default GuildChatApp;
