import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from '../header';
import { PeoplePage, PlanetsPage, StarshipsPage, Film } from '../page-with-data'
import './app.css';

export default class App extends Component{
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Film/>
          <Switch>
            <Route path="/" exact>
              <div className="welcome__block">
                <h4>Welcome to StarWarsDB</h4>
              </div>
            </Route>
            <Route path="/people/:id?">
              <PeoplePage/>
            </Route>

            <Route path="/planets/:id?">
              <PlanetsPage/>
            </Route>

            <Route path="/starships/:id?">
              <StarshipsPage/>
            </Route>

            <Redirect to="/"/>
          </Switch>  
        </div>
      </Router>
      
    );
  }
}