import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS, DELETE_PHOTO } from '../actions/photos_actions';


const photoReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    
    switch (action.type) {

        case RECEIVE_PHOTO:
            const { photo } = action;
            newState = Object.assign( {}, state, photo);
            return newState;
            
        case RECEIVE_ALL_PHOTOS:
            return action.photos;

        case DELETE_PHOTO:
            newState = Object.assign( {}, state);
            delete newState[action.photoId];
            return newState;
    
        default:
            return state;
    }
};

export default photoReducer;