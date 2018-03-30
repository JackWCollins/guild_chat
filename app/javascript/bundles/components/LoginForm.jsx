import React from 'react'
import { List, Grid } from 'semantic-ui-react'
import Conversation from "./Conversation";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  render() {
    // const users = [
    //   {name: "Kevin Smith", id: 1},
    //   {name: "James Franco", id: 2},
    //   {name: "Daniel Life", id: 3}
    // ]
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <List selection verticalAlign='middle'>
              {
                this.props.users.map((user) => {
                  <List.Item onClick={this.props.login(user.id, user.name)}>
                    <List.Content>
                      <List.Header>{user.name}</List.Header>
                    </List.Content>
                  </List.Item>
                })
              }
            </List>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

Conversation.propTypes = {
  users: PropTypes.array,
  login: PropTypes.func.isRequired
};

export default LoginForm
