import { connect } from 'react-redux';
import { createComment } from '../../actions/comments_action';
import CommentAdd from './comment_add';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CommentAdd);