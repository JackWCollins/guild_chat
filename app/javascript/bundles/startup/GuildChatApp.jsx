import React from 'react';
import { Provider } from 'react-redux';
import { isAuthenticated } from "../components/AuthService";

import configureStore from '../store/guildChatStore';
import GuildChatContainer from '../containers/GuildChatContainer';
import LoginFormContainer from "../containers/LoginFormContainer";

const GuildChatApp = (props) => (
  <Provider store={configureStore(props)}>
    { isAuthenticated() ? <GuildChatContainer /> : <LoginFormContainer />}
  </Provider>
);

export default GuildChatApp;
