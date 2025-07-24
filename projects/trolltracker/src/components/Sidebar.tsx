import React, { useState } from "react";
import "./Sidebar.css"; // Make sure your styles are shared

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`sidebar ${expanded ? "expanded" : ""}`}>
      <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        ☰
      </button>
      <nav className="nav-links">
        <a href="/index.html">Home</a>
        <a href="/projects/trolltracker/">Troll Tracker</a>
        <a href="/projects/project2.html">Project 2</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;
