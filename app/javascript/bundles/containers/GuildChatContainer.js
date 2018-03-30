import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GuildChat from '../components/GuildChat';
import * as actions from '../actions/guildChatActionCreators';

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GuildChat);
