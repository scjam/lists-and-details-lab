import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllCharacters from '../../containers/all-characters/AllCharacters';
import CharacterDetails from './../../containers/character/CharacterDetails';

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
                path="/details"
                exact
                component = { CharacterDetails }
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
