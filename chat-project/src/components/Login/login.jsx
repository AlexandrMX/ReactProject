import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  addTask } from '../../actions';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
            <button onClick={() => addTask(username, password)}>Login</button>
        </div>
    );
    // Login.propTypes = {
    //     onInputChange: PropTypes.func,
    //     addTask: PropTypes.func,
    //     username: PropTypes.string.isRequired,
    //     password:PropTypes.string.isRequired
    // };
}

// export default connect(
//     state => ({
//         username: state.username,
//         password: state.password
//     }),
//     { onInputChange, addTask }
// )
export default (Login);