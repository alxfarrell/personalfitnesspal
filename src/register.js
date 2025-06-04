import React from 'react';

function Register() {
  return (
    <div className="register-page">
      <h2>Create an Account</h2>
      <form method="post">
        <div>
            <label>Name: </label>
            <input type="text" name="name" required />
        </div>
        <div>
            <label>Email: </label>
            <input type="email" name="email" required />
        </div>
            <label>Password: </label>
            <input type="password" name="password" required />
        <div>
            <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;