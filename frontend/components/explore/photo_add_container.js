import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions';
import PhotoAdd from './photo_add';


const mSTP = (state, ownProps) => {
    // debugger
    return {
        photo: state.entities.photos[ownProps.match.params.photoId] || "",
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    createPhoto: (newPhoto) =>(
        dispatch(createPhoto(newPhoto))
    )
})

export default connect(mSTP, mDTP)(PhotoAdd);