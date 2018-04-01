import PropTypes from 'prop-types';
import React from 'react';
import { Tab, Container, Menu, Loader } from 'semantic-ui-react';
import LoginFormContainer from "../containers/LoginFormContainer";
import UserConversationsContainer from "../containers/UserConversationsContainer";
import Cable from 'actioncable';

class GuildChat extends React.Component {

  state = {
    cable: null,
    messageSubscription: null
  }

  componentWillMount() {
    this.listenForMessages();
  }

  listenForMessages() {
    // Create a Rails ActionCable connection to listen for messages created by other users
    let cable = Cable.createConsumer('ws://'+window.location.host+'/cable');
    let messageSubscription = cable.subscriptions.create({
      channel: 'MessageChannel'
    }, {
      connected: () => {},
      received: (data) => {
        this.props.newMessageReceived(data)
      }
    });
    this.setState({cable: cable, messageSubscription: messageSubscription});
  }

  handleLogoutClick = () => {
    // Unsubscribe from the ActionCable subscription
    if (this.state.messageSubscription && this.state.cable) {
      this.state.cable.subscriptions.remove(this.state.messageSubscription)
    }

    this.props.logout();
  }

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
              <Menu.Item position='right' onClick={this.handleLogoutClick}>Logout</Menu.Item>
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
