import React from "react";
const headerStyle = {
    
 
    color: "white",
    fontWeight:"bold",
    backgroundColor:"black",
    boxShadow: "4px 4px 15px 3px  #6497b1",
    fontFamily: "Anton, sans-serif",
    color:"#6497b1",
    fontSize: "40px"
  }

  function Jumbo(){
    return (
      <div className="row">
     <div className="col">
       <div className="jumbotron text-center" style={headerStyle}>
       <p style={{backgroundColor:"#6497b1", color:"black"}}>Phone - (773) 426-1285</p>
        <p style={{backgroundColor:"#6497b1", color:"black"}}>Email - Irfanp90@gmail.com</p>
      </div>
       </div>
       </div>
      
    );
  }

  export default Jumbo;
