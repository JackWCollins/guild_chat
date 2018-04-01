import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Conversation from '../components/Conversation';
import { sendMessage } from '../actions/guildChatActionCreators';

const mapStateToProps = (state) => {
  return {
    conversation: state.home.conversations.find((c) => c.id === state.home.activeConversationId),
    activeUserId: state.home.activeUserId
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
