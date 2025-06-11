import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => (
  <nav className="nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
      <li><a href="/profileView.html">View Profiles</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
);

const Tile = ({ children, to }) => (
  to ? (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="tile">{children}</div>
    </Link>
  ) : (
    <div className="tile">{children}</div>
  )
);

const WorkoutHub = () => (
  <div className="app-container">
    <header>Workout Hub</header>
    <div className="grid-container">
      <Tile to="/search">🏋 Workouts</Tile>
      <Tile to="/progress">📊 Progress Tracker</Tile>
      <Tile to="/calculator">🧮 Calculators</Tile>
      <Tile to="/settings">⚙ Settings</Tile>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <WorkoutHub />
    </>
  );
}
