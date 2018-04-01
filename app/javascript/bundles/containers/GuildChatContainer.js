import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GuildChat from '../components/GuildChat';
import { logout, newMessageReceived } from '../actions/guildChatActionCreators';

const mapStateToProps = (state) => {
  return {
    users: state.home.users,
    activeUserName: state.home.activeUserName,
    activeUserId: state.home.activeUserId
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout, newMessageReceived }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GuildChat);
