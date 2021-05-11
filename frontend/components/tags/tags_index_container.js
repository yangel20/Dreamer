import { connect } from 'react-redux';
import { fetchAllTags } from '../../actions/tags_action'
import TagsIndex from './tags_index';

const mSTP = state =>( {
    tags: Object.values(state.entities.tags),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchAllTags: () =>(dispatch(fetchAllTags()))
});

export default connect(mSTP, mDTP)(TagsIndex);