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
                         <p style={{ fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1",color:"black",textAlign:"center", fontSize:"25px", fontWeight:"bold"}}>Browser Based Technologies </p>
                     <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px", fontWeight:"bold"}}>-HTML/CSS</ul>
                     <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px", fontWeight:"bold"}}>-JavaScript</ul>
                     <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px", fontWeight:"bold"}}>-jQuery</ul>
                     <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px", fontWeight:"bold"}}>-Bootstrap</ul>
                     <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px", fontWeight:"bold"}}>-React.js</ul>
                    </Card>
                </div> 
                
                 <div class="col">
            <Card>
                <p style={{ fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1",color:"black",textAlign:"center", fontSize:"25px",fontWeight:"bold"}}>Deployment </p>
                <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px",fontWeight:"bold"}}>-Heroku</ul>
                <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px",fontWeight:"bold"}}>-Git</ul>
                <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px",fontWeight:"bold"}}>-Github Page</ul>
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
                         <p style={{ fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1",color:"black",textAlign:"center",color:"black", fontSize:"25px",fontWeight:"bold"}}>Databases </p>
                     <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px",fontWeight:"bold"}}> -MySQL</ul>
                     <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px",fontWeight:"bold"}}>-MongoDB</ul>
                     <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px",fontWeight:"bold"}}>-Firebase</ul>
                     
                    </Card>
                </div> 
            
                 <div class="col">
            <Card>
                <p style={{ fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1",color:"black",textAlign:"center", fontSize:"25px",fontWeight:"bold"}}>Node.js (Server Side Development) </p>
                <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px",fontWeight:"bold"}}>-Express</ul>
                <ul style={{ fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"20px", fontWeight:"bold"}}>-MERN  Stack (MongoDB, Express.js, React.js, Node.js)</ul>
            </Card>
        </div>
       </div>
        </div>
        <br></br>
                

        </div>

    )
}



 
export default Skills;