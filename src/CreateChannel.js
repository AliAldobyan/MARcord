import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { createChannel } from "./redux/actions/";

class CreateChannel extends Component {
  state = {
    name: "",
    imageUrl: "",
  };

  submitChannel = (event) => {
    event.preventDefault();
    this.props.createChannel(this.state);
  };

  onTextchange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.submitChannel}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Channel Name</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.onTextchange}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label>Image URL</label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  onChange={this.onTextchange}
                />
              </div>
              <input className="btn" value="press" type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createChannel: (channel_name) => dispatch(createChannel(channel_name)),
});

export default connect(null, mapDispatchToProps)(CreateChannel);
