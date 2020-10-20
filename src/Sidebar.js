import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./redux/actions";
import ChannelList from "./MainPage";
const Sidebar = ({ user, logout }) => (
  <div>
    <div className="fixed-top">
      {user ? (
        <Link
          to="/logout"
          className="btn btn-danger m-2 float-left"
          onClick={() => logout()}
        >
          Logout {user.username}
        </Link>
      ) : (
        <div>
          <Link to="/login" className="btn btn-info m-2 float-left">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success m-2 float-left">
            Signup
          </Link>
        </div>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
