import React, { useState } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { authUser, onInputChange, setUsername, setPassword } from '../../actions';
=======
import { runLogin } from '../../lib/profile/actions';
>>>>>>> c9836989d99b7349f36e0756b24821cb481d44a2
import classes from './login.module.css';
import PropTypes from 'prop-types';
import firebase from 'firebase';

<<<<<<< HEAD
const Login = ({ authUser, username, password }) => {
=======
const Login = ({ onLoginClick }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

>>>>>>> c9836989d99b7349f36e0756b24821cb481d44a2
    return (
        <div className={classes.login}>
            <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="username"
            />
            <br />
            <input
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                placeholder="password"
            />
            <br />
<<<<<<< HEAD
            <button onClick={() => authUser({ username, password })}>Login</button>
=======
            <button onClick={onLoginClick(username, password)}>Login</button>
>>>>>>> c9836989d99b7349f36e0756b24821cb481d44a2
        </div>
    );

}
<<<<<<< HEAD
Login.propTypes = {
    onInputChange: PropTypes.func,
    authUser: PropTypes.func,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
=======

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: (username, password) => () => dispatch(runLogin(username, password))
    }
>>>>>>> c9836989d99b7349f36e0756b24821cb481d44a2
};


export default connect(
    state => ({
        username: state.username,
        password: state.password
    }),
<<<<<<< HEAD
    { onInputChange, authUser }
=======
    mapDispatchToProps
>>>>>>> c9836989d99b7349f36e0756b24821cb481d44a2
)(Login);
