import React from "react";

// const headerStyle = {
    
   
//     backgroundColor: "gold",
    
   
   
//   }
function Card({children}){
    return (
        <div className="container">
      <div className="card" style={{width: "18rem", opacity: "0.8", backgroundColor:"silver", color:"black"}}>
  <div class="card-body">
    {children}
    
  </div>
</div>
      </div>
    )
  }

  export default Card;