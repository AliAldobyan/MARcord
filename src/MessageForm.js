import React, { useEffect, useState } from "react";
import { postMessage } from "./redux/actions";
import { connect } from "react-redux";
import Picker from "emoji-picker-react";

const MessageForm = ({ channel, sendMessage, user }) => {
  const channelStorage = `${user.username}${channel}`;
  const initial = { message: "" };

  if (localStorage.getItem(channelStorage))
    initial["message"] = localStorage.getItem(channelStorage);

  const [message, setMessage] = useState(initial);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isOpen, setisOpen] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log(emojiObject);
    console.log(chosenEmoji);
    setMessage({
      ...message,
      ["message"]: message.message + emojiObject.emoji,
    });
    setisOpen(!isOpen);
  };

  const handleChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message);
    sendMessage(message, channel);
    localStorage.setItem(channelStorage, "");
    setMessage({ message: "" });
  };

  const handelEmoji = (event) => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    localStorage.setItem(channelStorage, message.message);
  }, [message.message]);

  //     <div className="col-6">
  // {" "}
  // <Picker
  //   onEmojiClick={onEmojiClick}
  //   style={{
  //     marginBottom: "140px",
  //   }}
  // />
  // </div>
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-9">
          <form>
            <input
              type="text"
              name="message"
              value={message.message}
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="col-5">
          <button
            type="submit"
            className="btn btn-primary ml-3"
            onClick={handleSubmit}
          >
            send
          </button>
          <button onClick={handelEmoji} className="btn btn-success ml-2">
            😎
          </button>
          {isOpen && <Picker onEmojiClick={onEmojiClick} />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ messages, user }) => ({
  messages,
  user,
  loading: !messages.length,
});

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message, channelId) =>
      dispatch(postMessage(message, channelId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
