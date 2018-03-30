import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Conversation from '../components/Conversation';
import { sendMessage } from '../actions/guildChatActionCreators';

const mapStateToProps = (state) => {
  return {
    conversationId: state.activeConversation.id,
    activeUserId: state.home.activeUserId
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
