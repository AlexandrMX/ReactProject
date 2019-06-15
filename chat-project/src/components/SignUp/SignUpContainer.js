import React, { Component } from "react";
import firebase from 'firebase';
import dbRef from '../../lib/dbRef';

import SignUpView from "./SignUpView";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();

    const { display_name, email, password } = event.target.elements;
    try {
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(user => {

        dbRef.update({ [`/profiles/${user.user.uid}`]: {displayName: display_name.value , userName: email.value }})
      });

    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default SignUpContainer;