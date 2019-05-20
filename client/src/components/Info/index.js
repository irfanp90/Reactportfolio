import React from "react";
import brick from "../../images/bricks.jpg"
const headerStyle = {
    
  backgroundImage: `url(${brick})`,
    color: "black",
    fontWeight:"bold",
   
    textShadow: "1px 1px 2px white, 0 0 1em darkblue, 0 0 0.2em white"
  }

  function Jumbo(){
    return (
      // <div className="container">
      <div className="jumbotron text-center" style={headerStyle}>
        
        <h3>Phone: (773)426-1285</h3>
        <h3>Email: Irfanp90@gmail.com</h3>
      </div>
      // </div>
    );
  }

  export default Jumbo;
