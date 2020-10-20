import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import HomePage from "./HomePage";
import Signup from "./SignupForm";
import Login from "./LoginForm";

const App = () => (
  <div className="container">
    <div className="row">
      <HomePage />
    </div>
    <div className="row">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  </div>
);
export default App;
