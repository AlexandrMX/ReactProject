import React, { Component } from "react";
import firebase from 'firebase';
import dbRef from '../../lib/dbRef';

import SignUpView from "./SignUpView";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();

    console.log(event.target.elements);
    const { display_name, email, password } = event.target.elements;
    console.log(display_name.value);
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
      // creation of profiles on Sign Up
      dbRef.child('profiles').push({displayName: display_name.value , userName: email.value})
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default SignUpContainer;