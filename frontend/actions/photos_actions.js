import * as APIUtil from '../util/photos_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";

export const receivePhoto = (photo) => ({
  
    type: RECEIVE_PHOTO,
    photo
});

export const receiveAllPhotos = ({photos, users}) => ({
   
    type: RECEIVE_ALL_PHOTOS,
    photos: photos,
    users: users
});


export const fetchAllPhotos = () => dispatch => (
    APIUtil.fetchAllPhotos().then(payload => (
        dispatch(receiveAllPhotos(payload))
        
    ))     
);

export const createPhoto = photo => dispatch => (
    APIUtil.createPhoto(photo).then( newPhoto => (
        dispatch(receivePhoto(newPhoto))
    ))
);

export const fetchPhoto = photoId => dispatch => (
    APIUtil.fetchPhoto(photoId).then(photo => (
        dispatch(receivePhoto(photo))
    ))
);


