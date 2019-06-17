import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../../lib/profile/actions';
import classes from './login.module.css';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
import { Input, Button } from 'reactstrap';
>>>>>>> 0d8c74e9abb31b773d131b24d27b77d84cb10bf7


const Login = ({ onLoginClick }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1 className={classes.login_title}>Login</h1>

            <div className={classes.login}>
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="username"
                />
                <br />
                <Input
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.currentTarget.value)}
                    placeholder="password"
                />
                <br />
                <Button color="primary" onClick={onLoginClick(username, password)}>Login</Button>
            </div>
        </div>
    );

<<<<<<< HEAD
}
=======
};
// Login.propTypes = {
//     onInputChange: PropTypes.func,
//     authUser: PropTypes.func,
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired
>>>>>>> 0d8c74e9abb31b773d131b24d27b77d84cb10bf7

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: (username, password) => () => dispatch(authUser(username, password)),
    };
};


export default connect(
    state => ({
        username: state.username,
        password: state.password
    }),
    mapDispatchToProps

)(Login);
