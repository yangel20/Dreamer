import * as albums_util from '../util/albums_api_util';

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const DELETE_ALBUM = "DELETE_ALBUM";

const receiveAllAlbums = (albums) => ({
    type: RECEIVE_ALL_ALBUMS,
    albums: albums
});

const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album: album
})

const deleteAAlbum = (albumId) => ({
    type: DELETE_ALBUM,
    albumId
})

export const fetchAllAlbums = () => dispatch => (
    albums_util.fetchAllAlbums().then(albums => (
        dispatch(receiveAllAlbums(albums))      
    ))
);

export const fetchAlbum = albumId => dispatch => (
    albums_util.fetchAlbum(albumId).then(album => (
        dispatch(receiveAlbum(album))
    ))
);

export const createAlbum = albumData => dispatch => (
    albums_util.createAlbum(albumData).then(albums => 
        dispatch(receiveAllAlbums([albums])
    ))
);

export const deleteAlbum = albumId => dispatch => (
    albums_util.deleteAlbum(albumId).then(() => (
        dispatch(deleteAAlbum(albumId))
    ))
);