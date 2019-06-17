import React, { Component } from "react";
import { connect } from 'react-redux';
import firebase from 'firebase';
import dbRef from '../../lib/dbRef';
import {signUp} from '../../lib/profile/actions';
import SignUpView from "./SignUpView";

class SignUpContainer extends Component {
  render() {
    return <SignUpView onSubmit={this.props.handleSignUp} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSignUp: (display_name, email, password) => (event) => {
      event.preventDefault();
      dispatch(signUp(display_name, email, password));
    },
  };
};


export default connect(null, mapDispatchToProps)(SignUpContainer);


