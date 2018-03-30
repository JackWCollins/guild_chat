import PropTypes from 'prop-types';
import React from 'react';
import { Form, TextArea, Feed, Icon, Button } from 'semantic-ui-react'

class Conversation extends React.Component {

  render() {
    return (
      <div>
        <Feed>
          <Feed.Event>
            <Feed.Label >
              <Icon name='user' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                {this.props.name}
                <Feed.Date>just now</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Hey, how's it going?
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
        <Form>
          <TextArea autoHeight placeholder={"Type a message to "+this.props.name+"..."} />
          <Button default>Submit</Button>
        </Form>
      </div>
    )
  }
};

Conversation.propTypes = {
  name: PropTypes.string
};

export default Conversation;
