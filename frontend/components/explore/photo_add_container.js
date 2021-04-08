import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';
import addPhoto from './photo_show';


const mSTP = (state, ownProps) => {
    return {
        photo: state.entities.photos[ownProps.match.params.photoId] || "",
        users: state.entities.users
    }
};

const mDTP = dispatch => ({
    createPhoto: (photoId) =>(
        dispatch(createPhoto(photoId))
    )
})

export default connect(mSTP, mDTP)(addPhoto);