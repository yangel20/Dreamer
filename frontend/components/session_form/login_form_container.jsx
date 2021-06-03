import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_action';
import loginForm from './login_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(loginForm);