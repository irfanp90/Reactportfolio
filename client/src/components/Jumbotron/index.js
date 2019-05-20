import React from "react";

const headerStyle = {
    
   
    backgroundColor: "gold",
    color: "black",
    fontWeight:"bold",
   
    textShadow: "1px 1px 2px yellow, 0 0 1em green, 0 0 0.2em white"
  }

  function Jumbotron(){
    return (
      <div className="container">
      <div className="jumbotron text-center" style={headerStyle}>
        <p style={{fontFamily: "Akronim",  fontSize: "50px"}}>IRFAN PATEL</p>
        <p style={{fontFamily: "Akronim",  fontSize: "30px"}}>FULL STACK WEB DEVELOPER</p>
        <h6>Phone: (773)426-1285</h6>
        <h6>Email: Irfanp90@gmail.com</h6>
      </div>
      </div>
    );
  }

  export default Jumbotron;
