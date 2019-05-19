import React from "react";
import { Name, Email, Comment, FormBtn } from "../components/Form";
import "./Home.css";
import API from "../utils/API"
class Contact extends React.Component {
    state = {
      name:"",
      email:"",
      comment:""

     
    };
  
    
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      let formData = {
        name: this.state.name,
        email: this.state.email,
        comment: this.state.comment
      }
      console.log("line 29", formData);

      API
          .saveContact(formData)
          .then(res => console.log("line 33 , line 45 prodform.js"))
          .catch(err => console.log(err));
      console.log("check", this.state)
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
        <h3>Contact</h3>
      <Name
        // value={this.state.search}
        onChange={this.handleInputChange}
        name="name"
        placeholder="John Smith"
      />
      <br></br>
      <Email
        // value={this.state.search}
        onChange={this.handleInputChange}
        name="email"
        placeholder="JohnSmith@gmail.com"
      />
      <br></br>
       <Comment
        // value={this.state.search}
        onChange={this.handleInputChange}
        name="comment"
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