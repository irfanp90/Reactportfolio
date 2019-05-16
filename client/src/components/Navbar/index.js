import React from "react";

function Navbar() {
  return (

  
    <nav className="navbar navbar-expand-md navbar navbar-light" style={{
      backgroundColor: "green"
    }}>
     <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        
        <li className="navbar">
          <a className="nav-link" href="/"style={{
            color: "gold"
          }}>Home</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Portfolio" style={{
            color: "gold"
          }}>Portfolio</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Skills" style={{
            color: "gold"
          }}>Skills</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Contact" style={{
            color: "gold"
          }}>Contact</a>
        </li>
      </ul>
    
    </div>
  </nav>
    
  );
}

export default Navbar;