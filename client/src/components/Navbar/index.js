import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <a className="navbar" href="/">Irfan Patel</a>
     <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        
        <li className="navbar">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Portfolio">Portfolio</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Skills">Skills</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
      </ul>
    
    </div>
  </nav>
  );
}

export default Navbar;