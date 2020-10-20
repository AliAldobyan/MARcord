import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./redux/actions";
import logo from "./MARcord_Logo.png";
import "./App.css";

const HomePage = ({ user, logout }) => (
  <div className="container App">
    <div className="container">
      <img src={logo} className="App-logo" alt="logo"></img>
    </div>
    {user ? (
      <Link
        to="/logout"
        className="btn btn-danger mt-5"
        onClick={() => logout()}
      >
        Logout {user.username}
      </Link>
    ) : (
      <div>
        <Link to="/login" className="btn btn-info   m-5">
          Login
        </Link>
        <Link to="/signup" className="btn btn-success m-5 ">
          Signup
        </Link>
      </div>
    )}
  </div>
);

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
