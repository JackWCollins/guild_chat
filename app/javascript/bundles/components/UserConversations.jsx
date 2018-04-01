import PropTypes from 'prop-types';
import React from 'react';
import { Tab, Loader } from 'semantic-ui-react';
import ConversationContainer from "../containers/ConversationContainer";

class UserConversations extends React.Component {

  componentDidMount() {
    this.props.loadConversations(this.props.activeUserId);
  }

  handleTabSelect = (event, data) => {
    let selectedConversation = this.props.conversations[data.activeIndex];
    if (selectedConversation) {
      this.props.selectConversation(selectedConversation.id)
    }
  };

  render() {
    if (this.props.loading) {
      return (
        <Loader active >Loading conversations</Loader>
      )
    } else {
      const conversationMenu = this.props.conversations.map((convo) => {
        let name = convo.users.find((u) => u.id !== this.props.activeUserId).first_name;
        return {menuItem: name, render: () => <Tab.Pane attached={false} > <ConversationContainer /> </Tab.Pane>}
       });

      return (
        <div>
          <Tab menu={{secondary: true, pointing: true}} panes={conversationMenu} onTabChange={this.handleTabSelect} />
        </div>
      )
    }
  }
};

UserConversations.propTypes = {
  conversations: PropTypes.array,
  loading: PropTypes.bool,
  activeConversationId: PropTypes.number,
  activeUserId: PropTypes.number,
  loadConversations: PropTypes.func,
  selectConversation: PropTypes.func,
  newMessageReceived: PropTypes.func
};

export default UserConversations;
