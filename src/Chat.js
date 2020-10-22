import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import { fetchMessages, localMessages, setHistory } from "./redux/actions";


const Chat = ({
  setMessages,
  loading,
  messages,
  setLocalMessages,
  firstTime,
}) => {
  const channelID = useParams().channelID;

  useEffect(() => {
    // if (localStorage.getItem(`channel${channelID}`) && firstTime) {
    //   console.log(firstTime, localStorage.getItem(`channel${channelID}`));
    //   // setLocalMessages(localStorage.getItem(`channel${channelID}`))
    //   // setMessages(Number(channelID), messages["timeStamp"])
    //   setMessages(Number(channelID), messages["timeStamp"]);
    //   console.log("yes I made it");
    // } else {
    //   setMessages(Number(channelID), messages["timeStamp"]);
    // }
    setMessages(Number(channelID), messages["timeStamp"]);
    // localStorage.setItem(`channel${channelID}`, messages["messages"])
    console.log("actual messages", messages.messages);
    localStorage.setItem(`channel${channelID}`, messages["messages"]);
    console.log("i caused this", localStorage.getItem(`channel${channelID}`));
    const interval = setInterval(() => {
      console.log(messages["timeStamp"]);
      setMessages(Number(channelID), messages["timeStamp"]);
    }, 15000);
    return () => clearInterval(interval);
  }, [channelID, messages["timeStamp"]]);

  useEffect(() => {
    // setLocalMessages(localStorage.getItem(`channel${channelID}`))
    // console.log("history is here",messages["messages"])
    // setHistory(channelID, messages["messages"])
    // localStorage.setItem(`channel${channelID}`, messages["messages"])
    // setMessages(Number(channelID), messages["timeStamp"])
  }, []);

  // console.log(loading)
  console.log("loaclstore", localStorage.getItem(`channel${channelID}`));
  if (loading) return <h1>loading</h1>;
  console.log("actual messages", messages.messages);

     
  return (
    <div className="chat">
      <Messages />
      <MessageForm channel={channelID} />
    </div>
  );
};

const mapStateToProps = ({ messages, user }) => ({
  messages,
  user,
  loading: messages["loading"],
  firstTime: messages["firstTime"],
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMessages: (channelId, timeStamp) =>
      dispatch(fetchMessages(channelId, timeStamp)),
    // setHistory: (channel, messages) => dispatch(setHistory(channel, messages)),
    setLocalMessages: (messages) => dispatch(localMessages(messages)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
