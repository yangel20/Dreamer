import { connect } from 'react-redux';
import { deleteComment } from "../../actions/comments_action";
import CommentsIndexItem from './comments_index_item'

const mSTP = state =>({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
});

const mDTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP,mDTP)(CommentsIndexItem);