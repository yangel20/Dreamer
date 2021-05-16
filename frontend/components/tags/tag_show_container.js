import { connect } from 'react-redux';
import { fetchAllTags } from '../../actions/tags_action';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import TagShow from './tag_show';

const mSTP = state =>( {
    photos: state.entities.photos,
    users: state.entities.users,
    tags: Object.values(state.entities.tags)
});

const mDTP = dispatch => ({
    fetchAllTags: () => dispatch(fetchAllTags()),
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    fetchAllUsers: () => dispatch(fetchAllUsers())

});

export default connect(mSTP, mDTP)(TagShow);