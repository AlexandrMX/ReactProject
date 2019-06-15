import React from "react";
import { Input, Button } from 'reactstrap';

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <label>
          <Input
            name="display_name"
            type="text"
            placeholder="username"
          />
        </label>
        <label>
          <Input
            type="email"
            placeholder="email"
          />
        </label>
        <label>
          <Input
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