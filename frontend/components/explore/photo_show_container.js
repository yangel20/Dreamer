import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photos_actions';
import PhotoShow from './photo_show';

const mSTP = (state, ownProps) => {
    return {
        photo: state.entities.photos[ownProps.match.params.photoId] || "",
        users: state.entities.users
    }
};

const mDTP = dispatch => ({
    fetchPhoto: (photoId) =>(
        dispatch(fetchPhoto(photoId))
    )
})

export default connect(mSTP, mDTP)(PhotoShow);