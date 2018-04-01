import PropTypes from 'prop-types';
import React from 'react';
import { Feed } from 'semantic-ui-react'

class AuthorMessage extends React.Component {

  render() {
    return (
      <Feed.Event className='author'>
        <Feed.Content>
          <Feed.Summary>
            {this.props.message.user.first_name}
          </Feed.Summary>
          <Feed.Extra text>
            {this.props.message.body}
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    )

  }
};

AuthorMessage.propTypes = {
  message: PropTypes.object,
};

export default AuthorMessage;
