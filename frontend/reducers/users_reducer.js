import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_ALL_USERS } from '../actions/users_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });

    case RECEIVE_ALL_USERS:
      let newState = Object.assign({}, state);
      Object.values(action.users.users).forEach(user => {
        newState[user.id] = user
      });
      // Object.assign({}, state, Object.values(action.users));
      return newState;

    default:
      return state;
  }
};

export default usersReducer;
