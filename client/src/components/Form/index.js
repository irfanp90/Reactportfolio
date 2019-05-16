import React from "react";


export function Input(props) {
    return (
      <div className="form-group mx-sm-3 mb-2">
        <input className="form-control" {...props} />
      </div>
    );
  }

  
export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 20, marginRight: 100, color:"gold", backgroundColor: "green", borderColor: "green"}} className="btn btn-primary ">
        {props.children}
      </button>
    );
  }

    


      
 

