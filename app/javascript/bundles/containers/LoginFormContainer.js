import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/LoginForm';
import { login, loadUsers } from '../actions/guildChatActionCreators';

const mapStateToProps = (state) => {
  return {
    users: state.home.users
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
