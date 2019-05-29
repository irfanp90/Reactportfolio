import React from "react";
import brick from "../../images/desk.jpg"
const headerStyle = {
    
  backgroundImage: `url(${brick})`,
    color: "black",
    fontWeight:"bold",
    backgroundSize:"cover",
    textAlign:"center",
    // textShadow: "1px 1px 2px white, 0 0 1em darkblue, 0 0 0.2em white",
    paddingBottom:"200px"
  
  }

  function Jumbotron(){
    return (
      // <div className="container">
      <div className=" jumbotron jumbotron-fluid" style={headerStyle}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p style={{  fontSize: "75px"}}>IRFAN PATEL</p>
        <p style={{  fontSize: "40px"}}>FULL STACK WEB DEVELOPER</p>
        {/* <h6>Phone: (773)426-1285</h6>
        <h6>Email: Irfanp90@gmail.com</h6> */}
      </div>
      // </div>
    );
  }

  export default Jumbotron;
