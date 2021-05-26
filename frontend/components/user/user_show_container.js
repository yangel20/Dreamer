import { connect } from 'react-redux';
import { fetchAllPhotos } from '../../actions/photos_actions';
import { fetchAllAlbums, deleteAlbum } from '../../actions/albums_action';
// import { fetchAllUsers } from '../../actions/users_actions';
import UserShow from './user_show';


const mSTP = (state, ownProps) =>{
    return{
    photos: state.entities.photos,
    albums: Object.values(state.entities.albums),
    user: state.entities.users[ownProps.match.params.userId],
    currUserId: state.session.id,
    currentUser: state.entities.users[state.session.id]
}
};

const mDTP = dispatch => ({
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId)),
    // fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mSTP, mDTP)(UserShow);