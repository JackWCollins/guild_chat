import PropTypes from 'prop-types';
import React from 'react';
import { Tab, Container, Menu, Loader } from 'semantic-ui-react';
import LoginFormContainer from "../containers/LoginFormContainer";
import UserConversationsContainer from "../containers/UserConversationsContainer";

class GuildChat extends React.Component {

  render() {
    if (!this.props.activeUserId) {
      return (
        <LoginFormContainer />
      )
    } else {
      return (
        <div>
          <Menu inverted >
            <Container>
              <Menu.Item>Guild Chat</Menu.Item>
              <Menu.Item position='right'>{this.props.activeUserName}</Menu.Item>
              <Menu.Item position='right' onClick={() => this.props.logout()}>Logout</Menu.Item>
            </Container>
          </Menu>
          <Container text>
            <UserConversationsContainer />
          </Container>
        </div>
      )
    }
  }
};

GuildChat.propTypes = {
  activeUserName: PropTypes.string,
  activeUserId: PropTypes.number,
  logout: PropTypes.func
};

export default GuildChat;
