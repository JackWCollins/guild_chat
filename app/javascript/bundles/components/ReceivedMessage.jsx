import PropTypes from 'prop-types';
import React from 'react';
import { Feed, Icon } from 'semantic-ui-react'

class ReceivedMessage extends React.Component {

  render() {
    return (
      <Feed.Event>
        <Feed.Label >
          <Icon name='user' />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            {this.props.message.user.first_name}
            <Feed.Date>recently</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            {this.props.message.body}
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    )
  }
};

ReceivedMessage.propTypes = {
  message: PropTypes.object
};

export default ReceivedMessage;
