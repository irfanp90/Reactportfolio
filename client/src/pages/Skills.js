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
                    <h3 style={{ fontFamily:"Anton, sans-serif"}}>SKILLS</h3>
                    <hr></hr>
                    <br></br>

                <div className="row">
                    <div className="col">
                     <Card>
                         <p>Browser Based Technologies </p>
                     <ul>-HTML/CSS</ul>
                     <ul>-JavaScript</ul>
                     <ul>-jQuery</ul>
                     <ul>-Bootstrap</ul>
                     <ul>-React.js</ul>
                    </Card>
                </div> 
                
                 <div class="col">
            <Card>
                <p>Deployment </p>
                <ul>-Heroku</ul>
                <ul>-Git</ul>
                <ul>-Github Page</ul>
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
                         <p>Databases </p>
                     <ul> -MySQL</ul>
                     <ul>-MongoDB</ul>
                     <ul>-Firebase</ul>
                     
                    </Card>
                </div> 
            
                 <div class="col">
            <Card>
                <p>Node.js (Server Side Development) </p>
                <ul>-Express</ul>
                <ul>-MERN  Stack (MongoDB, Express.js, React.js, Node.js)</ul>
            </Card>
        </div>
       </div>
        </div>
        <br></br>
                

        </div>

    )
}



 
export default Skills;