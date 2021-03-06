import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (

      <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Keep Track of All Your Cigars...</h1>
    <button className="btn btn-secondary btn-lg" onClick={this.loginClickEvent}>Log In</button>
  </div>
</div>
    );
  }
}

export default Auth;
