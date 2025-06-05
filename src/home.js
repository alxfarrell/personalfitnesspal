import React from "react";
import "./App.css";

const Navbar = () => (
  <nav className="nav">
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="register.html">Register</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
);

const Tile = ({ children }) => <div className="tile">{children}</div>;

const WorkoutHub = () => (
  <div className="app-container">
    <header>Workout Hub</header>
    <div className="grid-container">
      <Tile>🏋 Workouts</Tile>
      <Tile>📊 Progress Tracker</Tile>
      <Tile>🧮 Calculators</Tile>
      <Tile>⚙ Settings</Tile>
    </div>
  </div>
);

const App = () => (
  <>
    <Navbar />
    <WorkoutHub />
  </>
);

export default App;