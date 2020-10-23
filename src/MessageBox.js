import React from "react";
import { connect } from "react-redux";
import { botMessage } from "./redux/actions";


const MessageBox = ({ message, user, sendBotMessage }) => {
  let msg = message.message;
  return (
    <div>
      {/*{*/}
      {/*    message.username === user.username ?*/}
      {/*    <h5 key={message.id} className="text-danger">{message.username} : <small>{message.message}</small></h5>:*/}
      {/*    <h5 key={message.id}>{message.username} : <small>{message.message}</small></h5>*/}
      {/*}*/}
      {(() => {
        if (message.username === user.username) {
          if (msg.length > 8) {
            let tail = msg.substring(msg.length - 4, msg.length);
            if (
              tail.toLowerCase() === ".gif" ||
              tail.toLowerCase() === ".jpg" ||
              tail.toLowerCase() === ".png"
            ) {
              //sendBotMessage("854", { message: "I am your Bot" });
              return (
                <div>
                  <h5 key={message.id} className="text-danger">
                    {message.username}
                  </h5>
                  <img
                    key={message.id}
                    src={msg}
                    alt={msg}
                    className="rounded-circle"
                  />
                </div>
              );
            }
          }
          //   if (msg === "hello bot") {
          //     sendBotMessage({ message: "I am your Bot" }, "854");
          //   }
          return (
            <h5 key={message.id} className="text-danger">
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
                <div>
                  <h5 key={message.id}>{message.username}</h5>
                  <img key={message.id} src={msg} alt={msg} />
                </div>
              );
            }
          }

          return (
            <h5 key={message.id}>
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
const mapDispatchToProps = (dispatch) => ({
  sendBotMessage: (message, channelId) =>
    dispatch(botMessage(message, channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
