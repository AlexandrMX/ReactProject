import React, { useState } from 'react';
import { Input, Button, Form, FormGroup} from 'reactstrap';
import classes from './signup.module.css';


const SignUpView = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayname, setDisplayname] = useState('');
  return (
    <div className={classes.signup_form}>
      <Form  onSubmit={onSubmit(displayname,username,password)}>
        <div>
          <h1>Sign up</h1>
          <FormGroup>
            <Input
              value={displayname}
              onChange={e => setDisplayname(e.target.value)}
              name="display_name"
              type="text"
              placeholder="username"
            />
          </FormGroup>
          <FormGroup>
            <Input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="email"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              name="password"
              type="password"
              placeholder="password"
            />
          </FormGroup>
          <Button color="info">Sign Up</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpView;