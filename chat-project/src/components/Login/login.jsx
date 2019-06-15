import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authUser, onInputChange, setUsername, setPassword } from '../../lib/profile/actions';
import { runLogin } from '../../lib/profile/actions';
import classes from './login.module.css';
import PropTypes from 'prop-types';


const Login = ({ onLoginClick }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1 className={classes.login_title}>Login</h1>

            <div className={classes.login}>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="username"
                />
                <br />
                <input
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.currentTarget.value)}
                    placeholder="password"
                />
                <br />
                <button onClick={onLoginClick(username, password)}>Login</button>
            </div>
        </div>
    );

}
// Login.propTypes = {
//     onInputChange: PropTypes.func,
//     authUser: PropTypes.func,
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: (username, password) => () => dispatch(authUser(username, password)),
    }
};


export default connect(
    state => ({
        username: state.username,
        password: state.password
    }),
    mapDispatchToProps

)(Login);
