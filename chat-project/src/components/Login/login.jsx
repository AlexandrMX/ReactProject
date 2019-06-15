import React, { useState } from 'react';
import { connect } from 'react-redux';
import { runLogin } from '../../lib/profile/actions';
import classes from './login.module.css';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const Login = ({ onLoginClick }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            <button onClick={onLoginClick(username, password)}>Login</button>
        </div>
    );

}

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: (username, password) => () => dispatch(runLogin(username, password))
    }
};


export default connect(
    state => ({
        username: state.username,
        password: state.password
    }),
    mapDispatchToProps
)(Login);
