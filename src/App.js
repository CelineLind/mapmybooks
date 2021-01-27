import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import a css

// components
//import Header from "./components/Header";
//import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
//import CreateNewMap from "./pages/CreateNewMap";
import Testing from "./pages/Testing";
// Import Map
// Donations Link
// My Website

export default function App() {
  return (
    <Router>
      <div className="App">
        <div id="mapHere"></div>

        {/* the content */}
        <Switch>
            <Route exact path="/">
                <Home /> {/* this error can be ignored as it's just complaining that Home.js is empty */}
            </Route>

            <Route exact path="/create">
                <Testing />
            </Route>

        </Switch>

        
      </div>
    </Router>
  );
}