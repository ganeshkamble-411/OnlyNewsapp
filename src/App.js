import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <Switch>
          {/* <Route exact path="/"><News key="general" pageSize={9} country="in" category="general"/></Route> 
          <Route exact path="/business"><News key="business" pageSize={9} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News key="entertainment" pageSize={9} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News key="general" pageSize={9} country="in" category="general"/></Route> 
          <Route exact path="/health"><News key="health" pageSize={9} country="in" category="health"/></Route> 
          <Route exact path="/science"><News key="science" pageSize={9} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News key="sports" pageSize={9} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News key="technology" pageSize={9} country="in" category="technology"/></Route>  */}
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}