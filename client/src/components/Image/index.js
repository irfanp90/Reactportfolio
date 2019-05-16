import React from "react";

function Image({children}){
    return (
        <div className= "container">
       
        <img src="https://via.placeholder.com/150" class="rounded-circle" alt="https://via.placeholder.com"/>
        <div class="card-body">
         {children}
        </div> 
      </div> 
    
      );

  }

  export default Image;