import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photos_actions';




const photoReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = {};
    switch (action.type) {

        case RECEIVE_PHOTO:
            const { photo } = action;
            newState = Object.assign( {}, state, {[photo.id]: photo});
            return newState;
            
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
    
        default:
            return state;
    }
};

export default photoReducer;