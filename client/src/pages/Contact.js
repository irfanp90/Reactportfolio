import React from "react";
import { Name, Email, Comment, FormBtn } from "../components/Form";
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
      <Name
        value={this.state.search}
        onChange={this.handleInputChange}
        name="name"
        placeholder="John Smith"
      />
      <br></br>
      <Email
        value={this.state.search}
        onChange={this.handleInputChange}
        name="Email"
        placeholder="JohnSmith@gmail.com"
      />
      <br></br>
       <Comment
        value={this.state.search}
        onChange={this.handleInputChange}
        name="Message"
        placeholder="Comment . . ."
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