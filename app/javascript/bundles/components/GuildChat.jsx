import PropTypes from 'prop-types';
import React from 'react';
import { Tab, Container, Menu, Loader } from 'semantic-ui-react';
import Conversation from "./Conversation";

class GuildChat extends React.Component {
  render() {
    const conversations = [
      {user: {name: "Annie"}},
      {user: {name: "Kevin"}}
    ];

    const conversationMenu = conversations.map((convo) => (
      {menuItem: convo.user.name, render: () => <Tab.Pane attached={false}> <Conversation name={convo.user.name} /> </Tab.Pane>}
    ));

    if (this.props.loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div>
          <Menu fixed='top' inverted >
            <Container>
              <Menu.Item>Guild Chat</Menu.Item>
              <Menu.Item position='right'>{this.props.activeUserName}</Menu.Item>
              <Menu.Item position='right' onClick={this.props.logout()}>Logout</Menu.Item>
            </Container>
          </Menu>
          <Container text>
            <h2>{this.props.activeUser.firstName}</h2>
            <Tab menu={{secondary: true, pointing: true}} panes={conversationMenu} />
          </Container>
        </div>
      )
    }
  }
};

GuildChat.propTypes = {
  loading: PropTypes.bool,
  activeUserName: PropTypes.string,
  activeUserId: PropTypes.number
};

export default GuildChat;
