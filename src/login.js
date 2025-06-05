import React from 'react';
import "./App.css";

function Login() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div>
            <label>Email: </label>
            <input type="email" name="email" required />
        </div>
        <div>
            <label>Password: </label>
            <input type="password" name="password" required />
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;