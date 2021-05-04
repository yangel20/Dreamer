import { connect } from 'react-redux';
import { fetchAllComments } from '../../actions/comments_action'
import CommentsIndex from './comments_index';

const mSTP = state => {
    return{
        comments: Object.values(state.entities.comments)
    }
};

const mDTP = dispatch => ({
    fetchAllComments: () =>(dispatch(fetchAllComments()))
});

export default connect(mSTP, mDTP)(CommentsIndex);