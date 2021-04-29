import { connect } from 'react-redux';
import { fetchPhoto, deletePhoto } from '../../actions/photos_actions';
import { fetchUser } from '../../actions/users_actions';
import PhotoShow from './photo_show';

const mSTP = (state, ownProps) => {
    return {
        photo: state.entities.photos[ownProps.match.params.photoId] || "",
        users: state.entities.users,
        currentUser: state.session.id
    }
    
};

const mDTP = dispatch => ({
    fetchPhoto: (photoId) =>  dispatch(fetchPhoto(photoId)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
    fetchUser: () => dispatch(fetchPhoto(users))
})

export default connect(mSTP, mDTP)(PhotoShow);