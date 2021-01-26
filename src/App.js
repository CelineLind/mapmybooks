import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import a css

// components
//import Header from "./components/Header";
//import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import CreateNewMap from "./pages/CreateNewMap";
// Import Map
// Donations Link
// My Website

export default function App() {
  return (
    <Router>
      <div className="App">
        

        {/* the content */}
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/create">
                <CreateNewMap />
            </Route>

        </Switch>

        
      </div>
    </Router>
  );
}