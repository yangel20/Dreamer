import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/albums_action';
import AlbumShow from './album_show';

const mSTP = (state, ownProps) => {
    return {
        album: state.entities.albums[ownProps.match.params.albumId],
        photos: state.entities.photos,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
};

const mDTP = dispatch => ({
    fetchAlbum : (albumId) => dispatch(fetchAlbum(albumId)),
});

export default connect(mSTP, mDTP)(AlbumShow);