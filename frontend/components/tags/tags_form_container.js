import { connect } from 'react-redux';
import { createTag } from '../../actions/tags_action';
import TagsForm from './tags_forms';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    createTag: tag => dispatch(createTag(tag))
});

export default connect(mSTP, mDTP)(TagsForm);