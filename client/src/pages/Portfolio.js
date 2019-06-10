import React from "react";
import Image from "../components/Image";
import "./Home.css";
import movie from "../images/mov.png";
import barks from "../images/bark.png";
import book from "../images/google.png";
import game from "../images/cubs.png";
import train from "../images/schedule.png";
import psychic from "../images/psy.png";
import crystal from "../images/crystal.png";
import giphy from "../images/gip.png"
function Portfolio() {
    return(
 <div className="background"> 
<div className="container">
<h2 style={{ fontFamily:"Anton, sans-serif", backgroundColor:"#6497b1",color:"black",textAlign:"center"}}>INDEPENDENT PROJECT</h2>
<hr></hr>
<div className="row">
<div className="col">
<Image>
 <h4 style={{ fontFamily:"Anton, sans-serif",color:"#6497b1"}}>(React) Google Books</h4>   
<a className="hvr-grow"  href ="https://protected-savannah-43957.herokuapp.com/" target="_blank" title="GoogleBooks Live Link">
<img src={book} class="rounded" alt="(React) Google Books" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px  #6497b1"}}/>
</a>
<br></br>
<br></br>
<div className="row">
<div className="col">
<a className="hvr-pulse-grow" href="https://github.com/irfanp90/Googlebooks" target="_blank" title="GoogleBooks Repo Link">
<i className="fab fa-github-square"  style={{fontSize:"30px", color:"#6497b1"}}></i>
</a>
</div>
<div className="col">
</div>
<a className="hvr-pulse-grow" href="https://protected-savannah-43957.herokuapp.com/" target="_blank" title="GoogleBooks Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
<div className="col">
</div>
</div>
<br></br>
<div className="card"style={{width:"200px", height:"400px",backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1"}}>
<div className="card-body">
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Summary</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Booksearch application where user search book of their choice and presented with book information.</span>
    <br></br>
    <br></br>
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Skills</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Mongoose Express.js React.js Node.js</span>
</div>
</div>
</Image>

</div>
<div className="col">
<Image>
 <h4 style={{fontFamily:"Anton, sans-serif",color:"#6497b1"}}>Trivia Game</h4>    
<a className="hvr-grow" href ="https://irfanp90.github.io/TriviaGame/" target="_blank" title="TriviaGame Live Link">
<img src={game} class="rounded" alt="Trivia Game" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px  #6497b1"}}/>
</a>
<br></br>
<br></br>
<div className="row">
<div className="col">
<a className="hvr-pulse-grow" href="https://github.com/irfanp90/TriviaGame" target="_blank" title="TriviaGame Repo Link">
<i class="fab fa-github-square" style={{fontSize:"30px", color:"#6497b1"}}></i>
</a>
</div>
<div className="col">
</div>
<a className="hvr-pulse-grow"href="https://irfanp90.github.io/TriviaGame/" target="_blank" title="TriviaGame Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
<div className="col">
</div>
</div>
<br></br>
<div className="card"style={{width:"200px", height:"400px",backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1"}}>
<div className="card-body">
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Summary</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Trivia game application where user are asked questions and have to answer within a time limit.</span>
    <br></br>
    <br></br>
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Skills</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>HTML CSS JavaScript jQuery</span>
</div>
</div>
</Image>
</div>
<div className="col">
<Image>
 <h4 style={{ fontFamily:"Anton, sans-serif",color:"#6497b1"}}>Train Schedule</h4>    
<a  className="hvr-grow" href ="https://irfanp90.github.io/TrainSchedule/" target="_blank" title="TrainSchedule Live Link">
<img src={train} class="rounded" alt="Train Schedule" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px  #6497b1"}}/>
</a>
<br></br>
<br></br>
<div className="row">
<div className="col">
<a className="hvr-pulse-grow" href="https://github.com/irfanp90/TrainSchedule" target="_blank" title="TrainSchedule Repo Link">
<i class="fab fa-github-square" style={{fontSize:"30px", color:"#6497b1"}}></i>
</a>
</div>
<div className="col">
</div>
<a className="hvr-pulse-grow" href="https://irfanp90.github.io/TrainSchedule/" target="_blank" title="TrainSchedule Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
<div className="col">
</div>
</div>
<br></br>
<div className="card"style={{width:"200px", height:"400px",backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1"}}>
<div className="card-body">
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Summary</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Train schedule application that is presented with arrival of train and how far next train is away.</span>
    <br></br>
    <br></br>
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Skills</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>HTML CSS JavaScript jQuery Bootstrap Firebase</span>
</div>
</div>
</Image>
</div>
 </div>
<br></br>
 <div className="row">
<div className="col">
<Image>
 <h4  style={{ fontFamily:"Anton, sans-serif",color:"#6497b1"}}>Psychic Game</h4>    
<a className="hvr-grow" href ="https://irfanp90.github.io/Psychic-Game/" target="_blank" title="PsychicGame Live Link">
<img src={psychic} class="rounded" alt="Psychic Game" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px  #6497b1"}}/>
</a>
<br></br>
<br></br>
<div className="row">
<div className="col">
<a className="hvr-pulse-grow" href="https://github.com/irfanp90/Psychic-Game" target="_blank" title="PsychicGame Repo Link">
<i class="fab fa-github-square" style={{fontSize:"30px", color:"#6497b1"}}></i>
</a>
</div>
<div className="col">
</div>
<a className="hvr-pulse-grow" href="https://irfanp90.github.io/Psychic-Game/" target="_blank" title="PsychicGame Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
<div className="col">
</div>
</div>
<br></br>
<div className="card"style={{width:"200px", height:"400px",backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1"}}>
<div className="card-body">
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Summary</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Game application where the app randomly chooses a letter then the user have to guess that random letter.</span>
    <br></br>
    <br></br>
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Skills</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>HTML CSS JavaScript</span>
</div>
</div>
</Image>
</div>
<div className="col">
<Image>
 <h4  style={{ fontFamily:"Anton, sans-serif",color:"#6497b1"}}>Crystal Collector</h4>    
<a className="hvr-grow" href ="https://irfanp90.github.io/unit-4-game/" target="_blank" title="CrystalCollector Live Link">
<img src={crystal} class="rounded" alt="Crystal Collector" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px  #6497b1"}}/>
</a>
<br></br>
<br></br>
<div className="row">
<div className="col">
<a  className="hvr-pulse-grow" href="https://github.com/irfanp90/unit-4-game" target="_blank" title="CrystalCollector Repo Link">
<i class="fab fa-github-square" style={{fontSize:"30px", color:"#6497b1"}}></i>
</a>
</div>
<div className="col">
</div>
<a  className="hvr-pulse-grow" href="https://irfanp90.github.io/unit-4-game/" target="_blank" title="CrystalCollector Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
<div className="col">
</div>
</div>
<br></br>
<div className="card"style={{width:"200px", height:"400px",backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1"}}>
<div className="card-body">
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Summary</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Game application where the app randomly chooses a target then user clicks on the crystal image to equal random target.</span>
    <br></br>
    <br></br>
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Skills</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>HTML CSS JavaScript jQuery </span>
</div>
</div>
</Image>
</div>
<div className="col">
<Image>
 <h4  style={{ fontFamily:"Anton, sans-serif",color:"#6497b1", fontWeight:"bold"}}>Giphy</h4>    
<a className="hvr-grow" href ="https://irfanp90.github.io/GIPHY-API/" target="_blank" title="Giphy Live Link">
<img src={giphy}class="rounded" alt="Giphy" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px  #6497b1"}}/>
</a>
<br></br>
<br></br>
<div className="row">
<div className="col">
<a className="hvr-pulse-grow" href="https://github.com/irfanp90/GIPHY-API" target="_blank" title="Giphy Repo Link">
<i class="fab fa-github-square" style={{fontSize:"30px", color:"#6497b1"}}></i>
</a>
</div>
<div className="col">
</div>
<a className="hvr-pulse-grow" href="https://irfanp90.github.io/GIPHY-API/" target="_blank" title="Giphy Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
<div className="col">
</div>
</div>
<br></br>
<div className="card"style={{width:"200px", height:"400px",backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1"}}>
<div className="card-body">
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Summary</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Search application where user click on button and presented with random Giphy's.</span>
    <br></br>
    <br></br>
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Skills</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>HTML CSS AJAX JavaScript jQuery</span>
</div>
</div>
</Image>
</div>
 </div>
 <br></br>
 <h2 style={{ fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1",color:"black",textAlign:"center"}}>GROUP PROJECT</h2>
 <hr></hr>
  <div className="row">
<div className="col">
<Image>
 <h4  style={{fontFamily:"Anton, sans-serif",color:"#6497b1"}}>Movies Galore!</h4>  
 <a className="hvr-grow" href="https://neagtivefriction.github.io/Group-Project-1/" target="_blank" title="MoviesGalore! Live Link">
<img src={movie} class="rounded" alt="Movie Galore" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px  #6497b1"}}/>
 </a>  
 <br></br>
<br></br>
 <div className="row">
 <div className="col">
<a className="hvr-pulse-grow" href="https://github.com/irfanp90/Group-Project-1" target="_blank" title="MoviesGalore! Repo Link">
<i class="fab fa-github-square" style={{fontSize:"30px", color:"#6497b1"}}></i>
</a>
</div>
<div className="col">
<a className="hvr-pulse-grow" href="https://neagtivefriction.github.io/Group-Project-1/" target="_blank" title="MoviesGalore! Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
</div> 
  <div className="col"> 
 </div> 
</div>
<br></br>
<div className="card"style={{width:"200px", height:"460px",backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1"}}>
<div className="card-body">
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Summary</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Search application where user click on button and presented with random Giphy's.</span>
    <br></br>
    <br></br>
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Skills</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>HTML CSS AJAX JavaScript jQuery</span>
</div>
</div>
</Image>
</div>
<div className="col">
<Image>
<h4  style={{ fontFamily:"Anton, sans-serif", color:"#6497b1"}}>Barks & Brews</h4> 
<a className="hvr-grow" href ="https://barksandbrews.herokuapp.com/" target="_blank" title="Barks&Brews Live Link">
<img src={barks} class="rounded" alt="Barks & Brews" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px  #6497b1"}}/>
 </a>
 <br></br>
<br></br>
<div className="row">
<div className="col">
<a className="hvr-pulse-grow" href="https://github.com/chrislewisjones/Project2" target="_blank" title="Barks&Brews Repo Link">
<i class="fab fa-github-square" style={{fontSize:"30px", color:"#6497b1"}}></i>
</a>
</div>
<div className="col">
<a className="hvr-pulse-grow" href="https://barksandbrews.herokuapp.com/" target="_blank" title="Barks&Brews Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
</div>
 <div className="col">
</div>
</div>
<br></br>
<div className="card"style={{width:"200px", height:"460px",backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1"}}>
<div className="card-body">
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Summary</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>Search application where user can search dog friendly bars near current location or city then write/read reviews.</span>
    <br></br>
    <br></br>
    <p style={{fontFamily:"Anton, sans-serif",backgroundColor:"#6497b1", color:"black", textAlign:"center",fontSize:"18px",fontWeight:"bold"}}>Skills</p>
    <span style={{fontFamily:"Anton, sans-serif",color:"#6497b1",fontSize:"18px", fontWeight:"bold",textAlign:"center"}}>HTML CSS MySQL jQuery Bootstrap POWR instagram feed</span>
</div>
</div>
</Image>
</div>
{/* <div className="col">

</div>  */}
 </div>
 
</div>
<br></br>
<br></br>

</div>

    )
}



 
export default Portfolio;