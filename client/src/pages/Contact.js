import React from "react";
import { Input,FormBtn } from "../components/Form";
import "./Home.css"
class Contact extends React.Component {
    state = {
     
    };
  
    
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      this.searchBooks(this.state.search);
     };
  
  render(){
  return(
     
      <div  className="background">
      <div className="container">
     <br></br>
     <br></br>
     <br></br>
     <br></br>
      <br></br>
      <br></br>
      <form>
      <Input
        value={this.state.search}
        onChange={this.handleInputChange}
        name="name"
        placeholder="Name"
      />
      <br></br>
      <Input
        value={this.state.search}
        onChange={this.handleInputChange}
        name="Email"
        placeholder="Email"
      />
      <br></br>
       <Input
        value={this.state.search}
        onChange={this.handleInputChange}
        name="Message"
        placeholder="Message"
      />
      <br></br>
      <FormBtn
                
  onClick={this.handleFormSubmit}
                >
                 SUBMIT
                </FormBtn>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
  </div>
     </div>          
    );
    }
    }
  
  export default Contact;