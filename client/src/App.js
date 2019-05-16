import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div>
      <Navbar />

        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/Contact" component={Contact} />
           {/* <Route exact path="/Skills" component={Skills} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;