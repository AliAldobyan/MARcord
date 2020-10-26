import React, { useEffect, useState } from "react";
import { postMessage } from "./redux/actions";
import { connect } from "react-redux";
import Picker from "emoji-picker-react";

const MessageForm = ({ channel, sendMessage }) => {
  const channelStorage = `${channel}`;
  const initial = { message: "" };

  useEffect(() => {
    setMessage({ message: localStorage.getItem(channelStorage) || "" });
  }, [channel]);


  const [message, setMessage] = useState(initial)
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isOpen, setisOpen] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
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

  return (

    <div className="container">
      <div className="row my-2">
        <div className="col-9">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              value={message.message}
              required
              onChange={handleChange}
            />
          </form>
            <button
                type="submit"
                className="btn btn-primary ml-3"
            >
              send
            </button>
            <button onClick={handelEmoji} className="btn btn-success ml-2">
              😎
            </button>
            {isOpen && <Picker onEmojiClick={onEmojiClick} />}
        </div>
        <div className="col-5">



        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ messages }) => ({
  messages,
});

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message, channelId) =>
      dispatch(postMessage(message, channelId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
