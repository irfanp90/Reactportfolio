import React from "react";
const headerStyle = {
    
 
    color: "white",
    fontWeight:"bold",
    backgroundColor:"black",
    boxShadow: "4px 4px 15px 3px  #6497b1",
    fontFamily: "Anton, sans-serif",
    color:"#6497b1",
    fontSize: "20px"
  }

  function About(){
    return (
        <div className="row">
          <div className="col">
              <br></br>
              <h3 style={{ fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1",color:"black",textAlign:"center"}}>ABOUT</h3>
              <br></br>
            <div className="jumbotron text-center" style={headerStyle}>
              <p>Full Stack Developer with a background in laboratory healthcare. Resourceful problem-solver with superior conflict resolution skills. Proven ability to learn technical information quickly while communicating it in an easy to understand language. Excellent communication and effectively collaborate with others to ensure goals are achieved.</p>
            </div>
          </div>
       </div>
      
    );
  }

  export default About;
