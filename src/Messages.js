import React, { useRef, useEffect } from "react";
import MessageBox from "./MessageBox";
import { connect } from "react-redux";

const Messages = ({ messages, channel }) => {
  // console.log(
  //   "actual messages in messages",
  //   messages.messages[1],
  //   messages.messages[2],
  //   messages.messages[3]
  // );
  const message = messages[channel]["messages"].map((message) => (
    <MessageBox
      key={message.id + message.message + message.timestamp}
      message={message}
    />
  ));
  const bottomRef = useRef();

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    scrollToBottom();
    const timeout = setTimeout(() => {
      scrollToBottom();
    }, 500);
    return () => clearTimeout(timeout);
  }, [messages[channel].messages]);

  return (
    <div>
      {message}
      <div ref={bottomRef} className="list-bottom">
        {" "}
      </div>
    </div>
  );
};

const mapStateToProps = ({ messages, user }) => ({
  messages,
  user,
  // loading: messages["loading"],
});

export default connect(mapStateToProps)(Messages);
