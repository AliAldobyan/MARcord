import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup, resetErrors } from "./redux/actions";
import { connect } from "react-redux";

const Signup = ({ signup, user, errorMsg }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
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
    signup(userData);
  };

  const errors = errorMsg;
  console.log(errors);

  const { username, email, password } = userData;
  if (user) return <Redirect to="/mainpage" />;
  return (
    <div className="container ">
      <div className="col-6 mx-auto">
        <div className="card my-2 bg-light ">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className={`form-control ${errors.username && "is-invalid"}`}
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.username}</div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password && "is-invalid"}`}
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.password}</div>
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>
              <Link
                to="/login"
                className="btn btn-link my-2 my-sm-0 text-warning"
              >
                I already have an account
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
  signup: (userData) => dispatch(signup(userData)),
  resetErrors: () => dispatch(resetErrors()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
