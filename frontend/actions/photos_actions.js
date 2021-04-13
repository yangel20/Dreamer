import * as photos_util from '../util/photos_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const CREATE_PHOTO = "CREATE_PHOTO";

export const receivePhoto = (photo) => ({
  
    type: RECEIVE_PHOTO,
    photo
});

export const receiveAllPhotos = ({photos, users}) => ({
   
    type: RECEIVE_ALL_PHOTOS,
    photos: photos,
    users: users
});

export const createAPhoto = ({photo}) =>({

    type: CREATE_PHOTO,
    photo
})



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


