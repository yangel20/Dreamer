import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comments_action';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let ns = Object.assign({}, state);
    
    switch (action.type) {
        case RECEIVE_COMMENT:  
            return Object.assign({}, state, { [action.comment.id]: action.comment } );

        case RECEIVE_ALL_COMMENTS:
            let comments = Object.values(action.comments);
            debugger
            comments.forEach(comment => {
                ns[comment.id] = comment
            });

            return ns;
        
        case DELETE_COMMENT:
            delete ns[action.commentId];
            return ns;

        default:
            return state;
    }
}

export default commentsReducer;