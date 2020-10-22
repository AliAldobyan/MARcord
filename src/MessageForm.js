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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message.message}
          required
          onChange={handleChange}
        />
        <button type="submit">send</button>
        <button></button>
      </form>
      {isOpen && <Picker onEmojiClick={onEmojiClick} />}
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
