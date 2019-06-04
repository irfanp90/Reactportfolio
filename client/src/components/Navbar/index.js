import React from "react";

function Navbar() {
  return (

  
    <nav className="navbar navbar-expand-md navbar navbar-light" style={{
      backgroundColor:"black", boxShadow: "4px 4px 15px 3px #6497b1"
    }}>
     <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        
        <li className="navbar">
          <a className="nav-link" href="/"style={{
            color: "black"
          }}>Home</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Portfolio" style={{
            color: "black"
          }}>Portfolio</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Skills" style={{
            color: "black"
          }}>Skills</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Contact" style={{
            color: "black"
          }}>Contact</a>
        </li>
      </ul>
    
    </div>
  </nav>
    
  );
}

export default Navbar;