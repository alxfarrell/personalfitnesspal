import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './home';
import Login from './login';
import Register from './register';
import Profile from './profile';
import ProfileView from './profileView';
import About from './about';

function App() {
  return (
    <Router>
      <div>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
          <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
          <Link to="/profile" style={{ margin: '0 10px' }}>Profile</Link>
          <Link to="/profile-view" style={{ margin: '0 10px' }}>Profile View</Link>
          <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-view" element={<ProfileView />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;