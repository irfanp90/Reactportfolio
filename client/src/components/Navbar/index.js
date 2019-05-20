import React from "react";

function Navbar() {
  return (

  
    <nav className="navbar navbar-expand-md navbar navbar-light" style={{
      backgroundColor: "darkblue"
    }}>
     <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        
        <li className="navbar">
          <a className="nav-link" href="/"style={{
            color: "darkblue"
          }}>Home</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Portfolio" style={{
            color: "darkblue"
          }}>Portfolio</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Skills" style={{
            color: "darkblue"
          }}>Skills</a>
        </li>
        <li className="navbar">
          <a className="nav-link" href="/Contact" style={{
            color: "darkblue"
          }}>Contact</a>
        </li>
      </ul>
    
    </div>
  </nav>
    
  );
}

export default Navbar;