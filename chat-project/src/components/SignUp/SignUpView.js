import React from "react";

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <label>
          Display name
          <input
            name="display_name"
            type="text"
            placeholder="Display name"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;