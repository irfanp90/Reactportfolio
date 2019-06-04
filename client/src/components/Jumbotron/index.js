import React from "react";
import brick from "../../images/desk.jpg"
const headerStyle = {
    
  backgroundImage: `url(${brick})`,
    
    fontWeight:"bold",
    backgroundSize:"cover",
    textAlign:"center",
    opacity: "0.8",
    fontFamily: "Anton sans-serif",
    marginBottom:"0px",
    color:"black",
    textShadow: " 0 0 0.2em  #6497b1"
    
  }

  function Jumbotron(){
    return (
      <div className="background">
      <div className=" jumbotron jumbotron-fluid" style={headerStyle}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       <p style={{  fontSize: "75px"}}>IRFAN PATEL</p>
        <p style={{  fontSize: "40px"}}>FULL STACK  DEVELOPER</p>
       
      </div>
     </div>
    );
  }

  export default Jumbotron;
