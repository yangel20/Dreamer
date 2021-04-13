import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS, CREATE_PHOTO } from '../actions/photos_actions';




const photoReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    
    switch (action.type) {

        case RECEIVE_PHOTO:
            const { photo } = action;
            debugger
            newState = Object.assign( {}, state, photo);
            return newState;
            
        case RECEIVE_ALL_PHOTOS:
            return action.photos;

        // case CREATE_PHOTO:
        //     return Object.assign( {}, state, {[photo.id]: photo})
            
    
        default:
            return state;
    }
};

export default photoReducer;