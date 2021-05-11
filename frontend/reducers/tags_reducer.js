import { RECEIVE_ALL_TAGS, RECEIVE_TAG, DELETE_TAG } from '../actions/tags_action';

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);
    let ns = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_TAG:  
            return Object.assign({}, state, { [action.tag.id]: action.tag } );

        case RECEIVE_ALL_TAGS:
            let tags = Object.values(action.tags);
            tags.forEach(tag => {
                ns[tag.id] = tag
            });
            return ns;
        
        case DELETE_TAG:
            delete ns[action.tagId];
            return ns;

        default:
            return state;
    }
}

export default tagsReducer;