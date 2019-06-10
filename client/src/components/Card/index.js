import React from "react";


function Card({children}){
    return (
        <div className="container">
      <div className="card" style={{width: "18rem",  backgroundColor:"black", color:"#6497b1", boxShadow: "4px 4px 15px 3px  #6497b1", height:"350px"}}>
  <div class="card-body">
    {children}
    
  </div>
</div>
      </div>
    )
  }

  export default Card;