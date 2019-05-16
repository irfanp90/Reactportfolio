import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div>
      <Navbar />

        <Switch>
          <Route exact path="/" component={Home} /> 
          {/* <Route exact path="/saved" component={Saved} /> */}
          {/* <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;