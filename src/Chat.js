import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import {fetchMessages, firstFetch} from "./redux/actions";
import Loading from "./Loading";


const Chat = ({
  setMessages,
  messages,
  firstTimeFetching,
  timeStamp,
}) => {
  const channelID = useParams().channelID;
  const [channel, setChannel] = useState(0)
  const channelName = `channel${channelID}`
  const loading = messages.loading


  useEffect(() => {
    if (!messages[channelName] || channel !== channelID){
      setChannel(channelID)
      firstTimeFetching(Number(channelID));
    }

    setMessages(Number(channelID), timeStamp);

    const interval = setInterval(() => {
      setMessages(Number(channelID), timeStamp);
    }, 10000);
    return () => clearInterval(interval);
  }, [channelID, timeStamp]);


  if (loading || !messages[channelName]) return <Loading/>;

     
  return (
    <div className="chat">
      <Messages channel={channelName} className="chat"/>
      <MessageForm channel={channelID} />
    </div>
  );
};

const mapStateToProps = ({ messages, user }) => ({
  messages,
  user,
  timeStamp: messages["timeStamp"]
});

const mapDispatchToProps = (dispatch) => {
  return {
    setMessages: (channelId, timeStamp) =>
      dispatch(fetchMessages(channelId, timeStamp)),
    firstTimeFetching: (channelId) => dispatch(firstFetch(channelId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
