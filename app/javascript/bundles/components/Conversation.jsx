import PropTypes from 'prop-types';
import React from 'react';
import { Form, TextArea, Feed, Icon, Button, Loader } from 'semantic-ui-react'

class Conversation extends React.Component {

  state = {
    message: null
  };

  handleMessageChange = (event) => {
    this.setState({message: event.target.value});
  };

  handleMessageSubmit = () => {
    this.props.sendMessage(this.props.activeUserId, this.props.conversationId, this.state.message)
  };

  recipientName = () => {
    if (!this.props.message) {
      ''
    } else {
      this.props.messages.find((message) => message.user_id !== this.props.activeUserId).first_name
    }
  };

  render() {
    if (this.props.loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div>
          <Feed>
            <Feed.Event>
              <Feed.Label >
                <Icon name='user' />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  {this.recipientName()}
                  <Feed.Date>recently</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  Hey, how's it going?
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <Form>
            <TextArea autoHeight placeholder={"Type a message to "+this.recipientName()+"..."} onChange={this.handleMessageChange} />
            <Button default disabled={!this.state.message} onClick={this.handleMessageSubmit}>Submit</Button>
          </Form>
        </div>
      )
    }
  }
};

Conversation.propTypes = {
  recipientName: PropTypes.string,
  sendMessage: PropTypes.func.isRequired,
  conversationId: PropTypes.number
};

export default Conversation;
