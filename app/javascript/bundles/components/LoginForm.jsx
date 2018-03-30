import React from 'react'
import { List, Grid } from 'semantic-ui-react'
import Conversation from "./Conversation";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  }

  handleUserClick = (userId, userName) => {
    this.props.login(userId, userName)
  }

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
            Select a user:
            <List selection verticalAlign='middle'>
              {
                this.props.users.map((user) => (
                  <List.Item key={user.id} onClick={() => this.handleUserClick(user.id, user.name)}>
                    <List.Content>
                      <List.Header>{user.name}</List.Header>
                    </List.Content>
                  </List.Item>
                ))
              }
            </List>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

LoginForm.propTypes = {
  users: PropTypes.array,
  login: PropTypes.func.isRequired
};

export default LoginForm
