import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserConversations from '../components/UserConversations';
import { loadConversations, selectConversation } from '../actions/guildChatActionCreators';

const mapStateToProps = (state) => {
  return {
    loading: state.home.loadingConversations,
    conversations: state.home.conversations,
    activeConversationId: state.home.activeConversationId,
    activeUserId: state.home.activeUserId
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadConversations, selectConversation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConversations);
