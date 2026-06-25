import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>My App</h1>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;