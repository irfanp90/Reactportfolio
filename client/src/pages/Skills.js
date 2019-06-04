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
                    <h3 style={{ fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1",color:"black",textAlign:"center"}}>SKILLS</h3>
                    <hr></hr>
                    <br></br>

                <div className="row">
                    <div className="col">
                     <Card>
                         <p style={{ fontFamily: "Roboto sans-serif",backgroundColor:"#6497b1",color:"black",textAlign:"center", fontSize:"25px"}}>Browser Based Technologies </p>
                     <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-HTML/CSS</ul>
                     <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-JavaScript</ul>
                     <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-jQuery</ul>
                     <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-Bootstrap</ul>
                     <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-React.js</ul>
                    </Card>
                </div> 
                
                 <div class="col">
            <Card>
                <p style={{ fontFamily: "Roboto sans-seri",backgroundColor:"#6497b1",color:"black",textAlign:"center", fontSize:"25px"}}>Deployment </p>
                <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-Heroku</ul>
                <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-Git</ul>
                <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-Github Page</ul>
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
                         <p style={{ fontFamily: "Roboto sans-seri",backgroundColor:"#6497b1",color:"black",textAlign:"center",color:"black", fontSize:"25px"}}>Databases </p>
                     <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}> -MySQL</ul>
                     <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-MongoDB</ul>
                     <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-Firebase</ul>
                     
                    </Card>
                </div> 
            
                 <div class="col">
            <Card>
                <p style={{ fontFamily: "Roboto sans-seri",backgroundColor:"#6497b1",color:"black",textAlign:"center", fontSize:"25px"}}>Node.js (Server Side Development) </p>
                <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-Express</ul>
                <ul style={{ fontFamily: "Roboto sans-seri",color:"#6497b1",fontSize:"20px"}}>-MERN  Stack (MongoDB, Express.js, React.js, Node.js)</ul>
            </Card>
        </div>
       </div>
        </div>
        <br></br>
                

        </div>

    )
}



 
export default Skills;