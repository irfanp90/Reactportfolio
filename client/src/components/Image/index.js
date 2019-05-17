import React from "react";

function Image({children}){
    return (
        <div className= "container">
        <div class="card-body">
         {children}
        </div> 
      </div> 
    
      );

  }

  export default Image;