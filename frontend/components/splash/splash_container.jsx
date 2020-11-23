import { connect } from 'react-redux';
import Splash from './splash';
import { logout, login } from '../../actions/session_action';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  processForm: (user) => dispatch(login(user))
});


export default connect(mSTP, mDTP)(Splash);
