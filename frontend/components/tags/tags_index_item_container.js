import { connect } from 'react-redux';
import { deleteTag } from '../../actions/tags_action';
import TagsIndexItem from './tags_index_item';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => {
    return { deleteTag: tagId => dispatch(deleteTag(tagId))}
}
    

export default connect(mSTP, mDTP)(TagsIndexItem);

