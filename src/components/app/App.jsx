import React from 'react';
//import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllCharacters from '../../containers/all-characters/AllCharacters';
import Details from './../../containers/Details/Details';

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
                component = { AllCharacters }
              />
              <Route 
                path="/details/:id"
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
