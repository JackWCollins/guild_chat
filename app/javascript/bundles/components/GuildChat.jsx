import PropTypes from 'prop-types';
import React from 'react';
import { Tab, Container } from 'semantic-ui-react';
import Conversation from "./Conversation";

class GuildChat extends React.Component {
  render() {
    const conversations = [
      {user: {name: "James"}},
      {user: {name: "Kevin"}}
    ];

    const conversationMenu = conversations.map((convo) => (
      {menuItem: convo.user.name, render: () => <Tab.Pane attached={false}> <Conversation name={convo.user.name} /> </Tab.Pane>}
    ));

    return (
      <Container text>
        <Tab menu={{secondary: true, pointing: true}} panes={conversationMenu} />
      </Container>
    )
  }
};

GuildChat.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default GuildChat;
