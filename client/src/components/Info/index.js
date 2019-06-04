import React from "react";

const headerStyle = {
    
 
    color: "white",
    fontWeight:"bold",
    backgroundColor:"black",
    boxShadow: "4px 4px 15px 3px  #6497b1",
    fontFamily: "Anton sans-serif",
    color:"#6497b1"
    // textShadow: "1px 1px 2px white, 0 0 1em darkblue, 0 0 0.2em white"
  }

  function Jumbo(){
    return (
      <div className="background">
      {/* <div className="container"> */}
      <div className="jumbotron text-center" style={headerStyle}>
        
        <p style={{fontSize:"40px"}}>Phone-(773) 426-1285</p>
        <p style={{fontSize:"40px"}}>Email-Irfanp90@gmail.com</p>
      </div>
       </div>
       //  </div>
    );
  }

  export default Jumbo;
