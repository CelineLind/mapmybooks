import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Testing from './pages/Testing';

export default function App(){
  return (
    <main>
      <BrowserRouter>
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
      </BrowserRouter>
    </main>
  );
}