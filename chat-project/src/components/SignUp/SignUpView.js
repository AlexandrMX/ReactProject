import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';

const SignUpView = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayname, setDisplayname] = useState('');
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit(displayname,username,password)}>
        <label>
          <Input
            value={displayname}
            onChange={e => setDisplayname(e.target.value)}
            name="display_name"
            type="text"
            placeholder="username"
          />
        </label>
        <label>
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="email"
            placeholder="email"
          />
        </label>
        <label>
          <Input
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            name="password"
            type="password"
            placeholder="password"
          />
        </label>
        <Button color="primary">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpView;