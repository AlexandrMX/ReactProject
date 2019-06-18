import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../../lib/profile/actions';
import classes from './login.module.css';
import { Input, Button, Form, FormGroup} from 'reactstrap';


const Login = ({ onLoginClick }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classes.login_form}>
            <Form>
                <div>
                    <h1>Login</h1>
                    <FormGroup>
                        <Input
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="username" 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            value={password}
                            type="password"
                            onChange={e => setPassword(e.currentTarget.value)}
                            placeholder="password"
                        />
                    </FormGroup>
                    <div className={classes.login}>
                        <Button color="info" onClick={onLoginClick(username, password)}>Login</Button>
                    </div>
                </div>
            </Form>
        </div>
    );

};

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
