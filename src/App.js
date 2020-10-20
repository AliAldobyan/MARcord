import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import HomePage from "./HomePage";
import Signup from "./SignupForm";
import Login from "./LoginForm";
import Chat from "./Chat";

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
    <Route path="/channel/:channelID">
            <Chat />
          </Route>
      </Switch>
    </div>
  </div>
);
export default App;
