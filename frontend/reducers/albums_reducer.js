import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM, DELETE_ALBUM } from '../actions/albums_action';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let ns = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_ALBUM:  
            return Object.assign({}, state, { [action.album.id]: action.album } );

        case RECEIVE_ALL_ALBUMS:
            let albums = Object.values(action.albums);
            albums.forEach(album => {
                ns[album.id] = album
            });
            return ns;
        
        case DELETE_ALBUM:
            delete ns[action.albumId];
            return ns;

        default:
            return state;
    }
}

export default albumsReducer;