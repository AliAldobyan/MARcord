import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import {fetchMessages, firstFetch, setHistory} from "./redux/actions";


const Chat = ({
  setMessages,
  messages,
  firstTimeFetching,
  timeStamp
}) => {
  const channelID = useParams().channelID;
  const [channel, setChannel] = useState(0)
  const channelName = `channel${channelID}`
  const loading = messages.loading



  useEffect(() => {
    if (!messages[channelName] || channel !== channelID){
      console.log("first time")
      setChannel(channelID)
      firstTimeFetching(Number(channelID));
    }
    // else
    // const timeStamp = messages[channelName].timeStamp

    setMessages(Number(channelID), timeStamp);

    const interval = setInterval(() => {
      console.log(timeStamp);
      setMessages(Number(channelID), timeStamp);
    }, 150000);
    return () => clearInterval(interval);
  }, [channelID, timeStamp]);

  useEffect(() => {
    // setLocalMessages(localStorage.getItem(`channel${channelID}`))
    // console.log("history is here",messages["messages"])
    // setHistory(channelID, messages["messages"])
    // localStorage.setItem(`channel${channelID}`, messages["messages"])
    // setMessages(Number(channelID), messages["timeStamp"])
  }, []);

  // console.log(loading)
  // console.log("loaclstore", localStorage.getItem(`channel${channelID}`));
  console.log("whole state", messages)
  console.log(channel, channelID)
  if (loading || !messages[channelName]) return <h1>loading</h1>;
  console.log("whole state", messages)
  console.log("actual messages", messages[channelName].messages);

     
  return (
    <div className="chat">
      <Messages channel={channelName} />
      <MessageForm channel={channelID} />
    </div>
  );
};

const mapStateToProps = ({ messages, user }) => ({
  messages,
  user,
  timeStamp: messages["timeStamp"]
  // loading,
  // firstTime: messages["firstTime"],
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMessages: (channelId, timeStamp) =>
      dispatch(fetchMessages(channelId, timeStamp)),
    // setHistory: (channel, messages) => dispatch(setHistory(channel, messages)),
    // setLocalMessages: (messages) => dispatch(localMessages(messages)),
    firstTimeFetching: (channelId) => dispatch(firstFetch(channelId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
