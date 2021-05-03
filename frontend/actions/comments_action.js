import * as comments_util from '../util/comments_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveAllComments = (Comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    Comments: Comments
});

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment: comment
})

export const deleteAComment = (commentId) => ({
    type: DELETE_COMMENT,
    commentId
})



export const fetchAllComments = () => dispatch => (
    comments_util.fetchAllComments().then(comments => (
        dispatch(receiveAllComments(comments))
        
    ))
);

export const fetchComment = commentId => dispatch => (
    comments_util.fetchComment(commentId).then(comment => (
        dispatch(receiveComment(comment))
    ))
);

export const createComment = commentData => dispatch => (
    comments_util.createComment(commentData).then(comments => 
        dispatch(receiveAllComments([comments])
    ))
);

export const deleteComment = commentId => dispatch => (
    comments_util.deleteComment(commentId).then(() => (
        dispatch(deleteComment(commentId))
    ))
);