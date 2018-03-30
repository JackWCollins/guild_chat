import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserConversations from '../components/UserConversations';
import { loadConversations } from '../actions/guildChatActionCreators';

const mapStateToProps = (state) => {
  console.log("UserConversationsContainer: ", state);
  return {
    loading: state.home.loadingConversations,
    conversations: state.home.conversations,
    activeConversationId: state.home.activeConversationId,
    activeUserId: state.home.activeUserId
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadConversations }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConversations);
