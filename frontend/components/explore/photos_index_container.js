import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import PhotoIndex from './photos_index';

const mSTP = ({entities: { users, photos } }) => ({
    photos: Object.values(photos),
    users: users,

});

const mDTP = dispatch => ({
    fetchAllPhotos: () => (
        dispatch(fetchAllPhotos())
    )
});

export default connect(mSTP, mDTP)(PhotoIndex);