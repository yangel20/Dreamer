import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import PhotoIndex from './photos_index';

const mSTP = ({entities: { users, photos } }) => 
{
    return {
        photos: Object.values(photos),
        users: users
    }
};

const mDTP = dispatch => ({
    fetchAllPhotos: () => (dispatch(fetchAllPhotos())),
    fetchAllUsers: () => (dispatch(fetchAllUsers()))
});

export default connect(mSTP, mDTP)(PhotoIndex);