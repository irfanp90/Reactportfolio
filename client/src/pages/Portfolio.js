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
</Image>
</div>
 </div>

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
</Image>
</div>
 </div>
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

</div>
<a className="hvr-pulse-grow" href="https://neagtivefriction.github.io/Group-Project-1/" target="_blank" title="MoviesGalore! Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
<div className="col">
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
</div>
<a className="hvr-pulse-grow" href="https://barksandbrews.herokuapp.com/" target="_blank" title="Barks&Brews Live Link">
<i class="fas fa-paperclip" style={{fontSize:"30px", color:"#6497b1"}}></i> 
</a>  
<div className="col">
</div>
</div>
</Image>
</div>
<div className="col">

</div>
 </div>
 
</div>
<br></br>
<br></br>

</div>

    )
}



 
export default Portfolio;