import PropTypes from 'prop-types';
import React from 'react';
import { Container, Feed, Icon } from 'semantic-ui-react'
import AuthorMessage from "./AuthorMessage";
import ReceivedMessage from "./ReceivedMessage";

class ConversationMessages extends React.Component {

  render() {
    if ( this.props.messages.length == 0 ) {
      return (
        <Container>No messages yet...</Container>
      )
    } else {
      return (
        <div>
          <Feed>
            { this.props.messages.map((message) => (
              message.user.id === this.props.activeUserId ? <AuthorMessage key={message.id} message={message} activeUserId={this.props.activeUserId} /> : <ReceivedMessage key={message.id} message={message} activeUserId={this.props.activeUserId} />
            ))}
          </Feed>
        </div>
      )
    }
  }
};

ConversationMessages.propTypes = {
  messages: PropTypes.array,
  activeUserId: PropTypes.number.isRequired
};

export default ConversationMessages;
