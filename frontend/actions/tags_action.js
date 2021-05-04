import * as tags_util from '../util/tags_api_util'

export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const DELETE_TAG = "DELETE_TAG";

const receiveAllTags = (tags) => ({
    type: RECEIVE_ALL_TAGS,
    tags: tags
});

const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag: tag
});

const deleteATag = (tagId) => ({
    type: DELETE_TAG,
    tagId
});


export const fetchAllTags = () => dispatch => (
    tags_util.fetchAllTags().then(tags => (
        dispatch(receiveAllTags(tags))
        
    ))
);

export const fetchTag = tagId => dispatch => (
    tags_util.fetchTag(tagId).then(tag => (
        dispatch(receiveTag(tag))
    ))
);

export const createTag = tagData => dispatch => (
    tags_util.createTag(tagData).then(tags => 
        dispatch(receiveAllTags([tags])
    ))
);

export const deleteTag = tagId => dispatch => (
    tags_util.deleteTag(tagId).then(() => (
        dispatch(deleteATag(tagId))
    ))
);