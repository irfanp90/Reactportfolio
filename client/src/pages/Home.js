import React from "react";
import Jumbotron from "../components/Jumbotron";
import Particles from "react-particles-js";
import { Container, Row, Col } from "reactstrap";
import "./Home.css"
import API from "../utils/API"

  

function Home(props) {
      
      return(
       <div>
        {/* <Particles
            className="particles"
            params={{
              particles: {
                  number: {
                      value: 160,
                      density: {
                          enable: false
                      }
                  },
                  size: {
                      value: 10,
                      random: true
                  },
                  move: {
                      direction: "bottom",
                      out_mode: "out"
                  },
                  line_linked: {
                      enable: false
                  }
              },
              interactivity: {
                  events: {
                      onclick: {
                        enable: true,
                          mode: "remove"
                      }
                  },
                  modes: {
                      remove: {
                          particles_nb: 10
                      }
                  }
              }
            }}
          
          /> */}
         
         <div className="background"> 
         <br></br>
         <br></br>
          <Jumbotron />
          
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

</div>
</div> 
     
  );
  
  }

export default Home;

