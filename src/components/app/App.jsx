import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './containers/home/Home';
import Details from './containers/details/Details';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <Switch>
              <Route 
                path="/"
                exact
                component = { Home }
              />
              <Route 
                path="/details"
                exact
                component = { Details }
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
