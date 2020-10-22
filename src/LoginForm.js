import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login, resetErrors } from "./redux/actions";

const Login = ({ login, user, errorMsg, resetErrors }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      if (errorMsg.length) resetErrors();
    };
  }, []);

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const { username, password } = userData;

  if (user) return <Redirect to="/mainpage" />;

  const errors = errorMsg;
  console.log(errors);

  return (
    <div className="container">
      <div className="col-6 mx-auto">
        <div className="card mt-2 bg-light ">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className={`form-control ${
                    (errors.username || errors.non_field_errors) && "is-invalid"
                  }`}
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.username}</div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${
                    (errors.password || errors.non_field_errors) && "is-invalid"
                  }`}
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.password}</div>
                <div className="invalid-feedback">
                  {errors.non_field_errors}
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link
                to="/signup"
                className="btn btn-link my-2 my-sm-0 text-warning"
              >
                Signup for an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, errorMsg }) => ({ user, errorMsg });
const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(login(userData)),
  resetErrors: () => dispatch(resetErrors()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
