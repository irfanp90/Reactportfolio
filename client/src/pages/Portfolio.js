import React from "react";
import Image from "../components/Image";
import "./Home.css"
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
 <div className=""> 
<div className="container">
<h3>Independent Project</h3>
<hr></hr>
<div className="row">
<div className="col">
<Image>
 <h5>(React) Google Books</h5>   
<a href ="https://protected-savannah-43957.herokuapp.com/" target="_blank">
<img src={book} class="rounded" alt="(React) Google Books" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}/>
</a>

</Image>
 

</div>
<div className="col">
<Image>
 <h5>Trivia Game</h5>    
<a href ="https://irfanp90.github.io/TriviaGame/" target="_blank">
<img src={game} class="rounded" alt="Trivia Game" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}/>
</a>
</Image>
</div>
<div className="col">
<Image>
 <h5>Train Schedule</h5>    
<a href ="https://irfanp90.github.io/TrainSchedule/" target="_blank">
<img src={train} class="rounded" alt="Train Schedule" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}/>
</a>
</Image>
</div>
 </div>

 <div className="row">
<div className="col">
<Image>
 <h5>Psychic Game</h5>    
<a href ="https://irfanp90.github.io/Psychic-Game/" target="_blank">
<img src={psychic} class="rounded" alt="Psychic Game" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}/>
</a>
</Image>
</div>
<div className="col">
<Image>
 <h5>Crystal Collector</h5>    
<a href ="https://irfanp90.github.io/unit-4-game/" target="_blank">
<img src={crystal} class="rounded" alt="Crystal Collector" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}/>
</a>
</Image>
</div>
<div className="col">
<Image>
 <h5>Giphy</h5>    
<a href ="https://irfanp90.github.io/GIPHY-API/" target="_blank">
<img src={giphy}class="rounded" alt="Giphy" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}/>
</a>
</Image>
</div>
 </div>
 <h3>Group Project</h3>
 <hr></hr>
  <div className="row">
<div className="col">
<Image>
 <h5>Movies Galore!</h5>  
 <a href="https://neagtivefriction.github.io/Group-Project-1/" target="_blank">
<img src={movie} class="rounded" alt="Movie Galore" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}/>
 </a>  
</Image>
</div>
<div className="col">
<Image>
<h5>Barks & Brews</h5> 
<a href ="https://barksandbrews.herokuapp.com/" target="_blank">
<img src={barks} class="rounded" alt="Barks & Brews" style={{width:"200px", height:"200px",boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}/>
 
</a>
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