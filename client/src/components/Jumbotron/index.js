import React from "react";
import brick from "../../images/bricks.jpg"
const headerStyle = {
    
  backgroundImage: `url(${brick})`,
    color: "black",
    fontWeight:"bold",
   
    textShadow: "1px 1px 2px white, 0 0 1em darkblue, 0 0 0.2em white"
  }

  function Jumbotron(){
    return (
      // <div className="container">
      <div className="jumbotron text-center" style={headerStyle}>
        <p style={{  fontSize: "75px"}}>IRFAN PATEL</p>
        <p style={{  fontSize: "40px"}}>FULL STACK WEB DEVELOPER</p>
        {/* <h6>Phone: (773)426-1285</h6>
        <h6>Email: Irfanp90@gmail.com</h6> */}
      </div>
      // </div>
    );
  }

  export default Jumbotron;
