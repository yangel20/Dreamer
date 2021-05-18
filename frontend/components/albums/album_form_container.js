import connect from 'react-redux';
import { createAlbum } from '../../actions/albums_action';
import { fetchAllPhotos } from '../../actions/photos_actions';
import AlbumForm from './album_form';

const mSTP = (state) => {
    return {
        photos: Object.values(state.entities.photos),
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    createAlbum : () => dispatch(createAlbum ()),
});

export default connect(mSTP, mDTP)(AlbumForm);
