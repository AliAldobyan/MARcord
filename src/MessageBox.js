import React from "react";
import { connect } from "react-redux";

const MessageBox = ({ message, user }) => {
  let msg = message.message;
  return (
    <div>
      {(() => {
        if (message.username === user.username) {
          if (msg.length > 8) {
            let tail = msg.substring(msg.length - 4, msg.length);
            if (
              tail.toLowerCase() === ".gif" ||
              tail.toLowerCase() === ".jpg" ||
              tail.toLowerCase() === ".png"
            ) {
              return (
                <div key={message.id + message.username} className="user">
                  <h5 >
                    {message.username}
                  </h5>
                  <img
                    src={msg}
                    alt={msg}
                  />
                </div>
              );
            }
          }
          return (
            <h5 key={message.id} className="user">
              {message.username} : <small>{msg}</small>
            </h5>
          );
        } else {
          if (msg.length >= 8) {
            let tail = msg.substring(msg.length - 4, msg.length);
            if (
              tail.toLowerCase() === ".gif" ||
              tail.toLowerCase() === ".jpg" ||
              tail.toLowerCase() === ".png"
            ) {
              return (
                <div key={message.id} className="bot">
                  <h5 >{message.username}</h5>
                  <img src={msg} alt={msg} />
                </div>
              );
            }
          }

          return (
            <h5 key={message.id} className="bot">
              {message.username} : <small>{msg}</small>
            </h5>
          );
        }
      })()}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(MessageBox);
