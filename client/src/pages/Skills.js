import React from "react";
import Card from "../components/Card";
import "./Home.css"

function Skills() {
    return(
            <div className="background">
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
                    <h3 style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",textAlign:"center"}}>SKILLS</h3>
                    <hr></hr>
                    <br></br>

                <div className="row">
                    <div className="col">
                     <Card>
                         <p style={{ fontFamily: "Ranga, cursive",color:"#6497b1", fontSize:"20px"}}>Browser Based Technologies </p>
                     <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-HTML/CSS</ul>
                     <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-JavaScript</ul>
                     <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-jQuery</ul>
                     <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-Bootstrap</ul>
                     <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-React.js</ul>
                    </Card>
                </div> 
                
                 <div class="col">
            <Card>
                <p style={{ fontFamily: "Ranga, cursive",color:"#6497b1", fontSize:"20px"}}>Deployment </p>
                <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-Heroku</ul>
                <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-Git</ul>
                <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-Github Page</ul>
            </Card>
        </div>
       </div>
        </div>
        <br></br>
                <br></br>
                <br></br>
        <div className="container">
                <div className="row">
                    <div className="col">
               
                     <Card>
                         <p style={{ fontFamily: "Ranga, cursive",color:"#6497b1", fontSize:"20px"}}>Databases </p>
                     <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}> -MySQL</ul>
                     <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-MongoDB</ul>
                     <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-Firebase</ul>
                     
                    </Card>
                </div> 
            
                 <div class="col">
            <Card>
                <p style={{ fontFamily: "Ranga, cursive",color:"#6497b1", fontSize:"20px"}}>Node.js (Server Side Development) </p>
                <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-Express</ul>
                <ul style={{ fontFamily: "Ranga, cursive",color:"#6497b1"}}>-MERN  Stack (MongoDB, Express.js, React.js, Node.js)</ul>
            </Card>
        </div>
       </div>
        </div>
        <br></br>
                

        </div>

    )
}



 
export default Skills;