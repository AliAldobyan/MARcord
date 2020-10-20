import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Signup from "./SignupForm";
import Login from "./LoginForm";
import ChannelList from "./MainPage";
import CreateChannel from "./CreateChannel";

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-1">
        <Sidebar />
      </div>
      <div className="content col-11">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/mainpage">
            <ChannelList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/CreateChannel">
            <CreateChannel />
          </Route>
        </Switch>
      </div>
    </div>
  </div>
);
export default App;
