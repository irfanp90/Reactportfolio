import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
import API from "../utils/API";
import Portfolio from "../pages/Portfolio";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Jumbo from "../components/Info";
import Particles from "react-particles-js";
function Home(props) {
    
    return(
        <div> 
          
        <Jumbotron />
       
         <Particles
            className="particles"
            params={{
                particles: {
                    number: {
                        value: 560,
                        density: {
                            enable: false
                      }
                    },
                    size: {
                        value: 15,
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
                          mode: "repulse"
                      }
                    },
                    modes: {
                        remove: {
                            particles_nb: 40
                      }
                    }
                  
                    
                }
            }}
           /> 
         
         
            
         <div className="background">       
          <div className="container">
                           <Skills />
                           <br></br>
                           <br></br>
                           <Portfolio />
                           <br></br>
                           <Jumbo />
                         {/* <Contact /> */}
                         </div>               
</div>
</div>
     
  );
  
  }

export default Home;

