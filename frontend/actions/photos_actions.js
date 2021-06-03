import * as photos_util from '../util/photos_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const CREATE_PHOTO = "CREATE_PHOTO";
export const DELETE_PHOTO = "DELETE_PHOTO";

const receivePhoto = (photo) => ({
  
    type: RECEIVE_PHOTO,
    photo
});

const receiveAllPhotos = ({photos, users}) => ({
   
    type: RECEIVE_ALL_PHOTOS,
    photos: photos,
    users: users
});

const deleteAPhoto = (photoId) => ({
    type: DELETE_PHOTO,
    photoId
});




export const fetchAllPhotos = () => dispatch => (
    photos_util.fetchAllPhotos().then(payload => (
        dispatch(receiveAllPhotos(payload))
    ))     
);

export const createPhoto = photo => dispatch => (
    photos_util.createPhoto(photo).then( newPhoto => (
        dispatch(receivePhoto(newPhoto))
    ))
);

export const fetchPhoto = photoId => dispatch => (
    photos_util.fetchPhoto(photoId).then(photo => (
        dispatch(receivePhoto(photo))
    ))
);

export const deletePhoto = photoId => dispatch => (
    photos_util.deletePhoto(photoId).then(() => ( 
       dispatch(deleteAPhoto(photoId))
       ))
);


