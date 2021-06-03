import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_action';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(SignupForm);
