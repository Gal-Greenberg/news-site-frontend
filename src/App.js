import React, { Component } from "react";
import "normalize.css/normalize.css"
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from "./components/Main";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
// import { FormAddEvent } from "./components/FormAddEvent";
// import { Event } from "./components/Event";
// import { Error } from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/signIn" component={ SignIn }/>
          <Route exact path="/signUp" component={ SignUp }/>
          {/* <Route exact path="/formAddEvent" component={FormAddEvent}/>
          <Route exact path="/event" component={Event}/> */}
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
