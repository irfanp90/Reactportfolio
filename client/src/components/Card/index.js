import React from "react";


function Card({children}){
    return (
        <div className="container">
      <div className="card" style={{width: "18rem",  backgroundColor:"darkslategray", color:"white",  boxShadow: "4px 4px 15px 3px   rgb(32, 18, 9)"}}>
  <div class="card-body">
    {children}
    
  </div>
</div>
      </div>
    )
  }

  export default Card;