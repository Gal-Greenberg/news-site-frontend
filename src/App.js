import React, { Component } from "react";
import "normalize.css/normalize.css"
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { ContentCreator } from "./components/ContentCreator"
// import { FormAddEvent } from "./components/FormAddEvent";
// import { Event } from "./components/Event";
// import { Error } from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Dashboard }/>
          <Route exact path="/signIn" component={ SignIn }/>
          <Route exact path="/signUp" component={ SignUp }/>
          <Route exact path="/contentCreator" component={ ContentCreator }/>
          {/* <Route exact path="/formAddEvent" component={FormAddEvent}/>
          <Route exact path="/event" component={Event}/> */}
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
