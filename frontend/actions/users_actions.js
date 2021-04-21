import * as users_util from '../util/users_api_util';


export const RECEIVE_ALL_USERS = "REVEIVE_ALL_USERS";

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users: users
});

export const fetchAllUsers = () => dispatch => (
    users_util.fetchAllUsers().then(payload => (
        dispatch(receiveAllUsers(payload))
    ))
);