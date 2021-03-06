import React from "react";
const footerStyle = {
  position: "fixed",
  textAlign: "center",
  backgroundColor: "gainsboro",
  borderTop: "3px solid #6497b1",
  textAlign: "center",
  padding: "10px",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%"
};
function Footer() {
  return (

    <footer className="card" style={footerStyle} >
    <div className="row">
    <div className="col"></div>
    <div className="col">
   <a className="hvr-grow" href="https://github.com/irfanp90" target="_blank" title="GitHub">
        <i
          className="fab fa-github"
          style={{
            color: "#1b2024",
            fontSize: "25px",
            textAlign: "center"
          }}
        />
    </a>
      <span> | </span>  
    <a className="hvr-grow" href="https://www.linkedin.com/in/irfan-patel-b097a287/" target="_blank" title="LinkedIn">
        <i
          className="fab fa-linkedin"
          style={{
            color: "#0077b5",
            fontSize: "25px",
            textAlign: "center"
          }}
          />  
      </a>
    </div>
    <div className="col" ></div>
  </div>
          </footer>

  
);
}


export default Footer;