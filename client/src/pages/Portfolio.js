import React from "react";
import Image from "../components/Image";
import "./Home.css"
import movie from "../images/movie150x150.jpg";
import barks from "../images/barks.jpg";
import book from "../images/book.png";
import game from "../images/green.jpg";
import train from "../images/train.png";
import psychic from "../images/psychic.jpg";
import crystal from "../images/crystal.jpg";
import giphy from "../images/giphy.png"
function Portfolio() {
    return(
<div className="background">
<div className="container">
<h3>Indepedent Project</h3>
<div className="row">
<div className="col">
<Image>
<a href ="https://protected-savannah-43957.herokuapp.com/" target="_blank">
<img src={book} class="rounded-circle" alt="(React) Google Books"/>
</a>
 <h5>(React) Google Books</h5>   
</Image>

</div>
<div className="col">
<Image>
<a href ="https://irfanp90.github.io/TriviaGame/" target="_blank">
<img src={game} class="rounded-circle" alt="Trivia Game"/>
</a>
 <h5>Trivia Game</h5>    
</Image>
</div>
<div className="col">
<Image>
<a href ="https://irfanp90.github.io/TrainSchedule/" target="_blank">
<img src={train} class="rounded-circle" alt="Train Schedule"/>
</a>
 <h5>Train Schedule</h5>    
</Image>
</div>
 </div>

 <div className="row">
<div className="col">
<Image>
<a href ="https://irfanp90.github.io/Psychic-Game/" target="_blank">
<img src={psychic} class="rounded-circle" alt="Psychic Game"/>
</a>
 <h5>Psychic Game</h5>    
</Image>
</div>
<div className="col">
<Image>
<a href ="https://irfanp90.github.io/unit-4-game/" target="_blank">
<img src={crystal} class="rounded-circle" alt="Crystal Collector"/>
</a>
 <h5>Crystal Collector</h5>    
</Image>
</div>
<div className="col">
<Image>
<a href ="https://irfanp90.github.io/GIPHY-API/" target="_blank">
<img src={giphy}class="rounded-circle" alt="Giphy"/>
</a>
 <h5>Giphy</h5>    
</Image>
</div>
 </div>
 <hr></hr>
 <h3>Group Project</h3>
  <div className="row">
<div className="col">
<Image>
 <a href="https://neagtivefriction.github.io/Group-Project-1/" target="_blank">
<img src={movie} class="rounded-circle" alt="Movie Galore"/>
 </a>  
 <h5>Movies Galore!</h5>  
</Image>
</div>
<div className="col">
<Image>
<a href ="https://barksandbrews.herokuapp.com/" target="_blank">
<img src={barks} class="rounded-circle" alt="Barks & Brews"/>
</a>
<h5>Barks & Brews</h5> 
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