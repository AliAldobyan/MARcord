import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// Components
import HomePage from "./HomePage";
import Signup from "./SignupForm";
import Login from "./LoginForm";
import ChannelList from "./MainPage";
import CreateChannel from "./CreateChannel";
import Chat from "./Chat";

const App = () => (
  <div className="container">
    <div className="row">
      <Link to="/channels/814">814</Link>
      <Link to="/channels/831">831</Link>
      <Link to="/channels/788">788</Link>
      <HomePage />
    </div>
    <div className="row">
      <Switch>
        <Redirect exact from="/" to="/mainpage" />
        <Redirect exact from="/logout" to="/login" />
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/channels/:channelID">
          <Chat />
        </Route>
        <Route path="/CreateChannel">
          <CreateChannel />
        </Route>
        <Route path="/mainpage">
          <ChannelList />
        </Route>
      </Switch>
    </div>
  </div>
);
export default App;
