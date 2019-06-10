import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills"
import Image from "./pages/Portfolio"

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Portfolio" component={Image} />
        </Switch>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;