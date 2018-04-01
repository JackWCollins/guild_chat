import PropTypes from 'prop-types';
import React from 'react';
import { Form, TextArea, Feed, Icon, Button, Loader } from 'semantic-ui-react'
import ConversationMessages from './ConversationMessages';

class Conversation extends React.Component {

  state = {
    message: ''
  };

  handleMessageChange = (event) => {
    this.setState({message: event.target.value});
  };

  handleMessageSubmit = () => {
    this.props.sendMessage(this.props.activeUserId, this.props.conversation.id, this.state.message);
    this.setState({message: ''})
  };

  render() {
    return (
      <div>
        <ConversationMessages messages={this.props.conversation.messages} activeUserId={this.props.activeUserId} />
        <Form>
          <TextArea autoHeight placeholder={"Type a new message..."} onChange={this.handleMessageChange} value={this.state.message} />
          <Button positive disabled={!this.state.message} onClick={this.handleMessageSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
};

Conversation.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  conversation: PropTypes.object,
  activeUserId: PropTypes.number
};

export default Conversation;
