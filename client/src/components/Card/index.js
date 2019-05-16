import React from "react";

const headerStyle = {
    
   
    backgroundColor: "gold",
    
   
   
  }
function Card({children}){
    return (
        <div className="container" style={headerStyle}>
      <div className="card" style={{width: "18rem"}}>
  <div class="card-body">
    {children}
    
  </div>
</div>
      </div>
    );
  }

  export default Card;