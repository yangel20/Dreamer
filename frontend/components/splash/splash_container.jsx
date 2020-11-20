import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../util/session_api_util';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(Splash);
