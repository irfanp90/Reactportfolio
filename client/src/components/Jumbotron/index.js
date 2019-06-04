import React from "react";
import brick from "../../images/2.jpg"
const headerStyle = {
    
  backgroundImage: `url(${brick})`,
    
    fontWeight:"bold",
    backgroundSize:"cover",
    textAlign:"center",
    opacity: "0.8",
    fontFamily: "Bilbo Swash Caps, cursive",
    
    
  }

  function Jumbotron(){
    return (
      <div className="background">
      <div className=" jumbotron jumbotron-fluid" style={headerStyle}>
        <br></br>
        <br></br>
        <br></br>
       <p style={{  fontSize: "75px",color: "#6497b1"}}>IRFAN PATEL</p>
        <p style={{  fontSize: "40px",color: "#6497b1"}}>FULL STACK  DEVELOPER</p>
       
      </div>
     </div>
    );
  }

  export default Jumbotron;
