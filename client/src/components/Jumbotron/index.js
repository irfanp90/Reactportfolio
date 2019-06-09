import React from "react";
import brick from "../../images/Stock.jpg"
const headerStyle = {
    
  backgroundImage: `url(${brick})`,
    
    fontWeight:"bold",
    backgroundSize:"cover",
    textAlign:"left",
    opacity: "0.8",
    fontFamily: "Anton sans-serif",
    marginBottom:"0px",
    color:"#black",
    maxWidth:"100%",
    height:"auto",
    textShadow: "black 1px 0 10px"

  }

  function Jumbotron(){
    return (
      <div className="background">
      <div className=" jumbotron jumbotron-fluid" style={headerStyle}>
        <div className="container">
        <p style={{  fontSize: "75px"}}>IRFAN PATEL</p>
        <p style={{  fontSize: "40px"}}>FULL STACK  DEVELOPER</p>
        </div>
      </div>
     </div>
    );
  }

  export default Jumbotron;
