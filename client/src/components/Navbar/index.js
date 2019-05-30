import React from "react";

function Navbar() {
  return (

  
    <nav className="navbar navbar-expand-md navbar navbar-light" style={{
      backgroundColor:"darkslategray", boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"
    }}>
     <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        
        <li className="navbar">
          <a className="nav-link" href="/"style={{
            color: "darkslategray"
          }}>Home</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Portfolio" style={{
            color: "darkslategray"
          }}>Portfolio</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Skills" style={{
            color: "darkslategray"
          }}>Skills</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Contact" style={{
            color: "darkslategray"
          }}>Contact</a>
        </li>
      </ul>
    
    </div>
  </nav>
    
  );
}

export default Navbar;