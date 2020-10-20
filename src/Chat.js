import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Messages from "./Messages";
import MessageForm from "./MessageForm";
import {fetchMessages} from "./redux/actions";

const Chat = ({ setMessages, loading, messages }) => {
    const channelID = useParams().channelID

    useEffect(() => {
        console.log(messages["timeStamp"])
        setMessages(Number(channelID), messages["timeStamp"])

        const interval = setInterval(() => {
            console.log(messages["timeStamp"])
            setMessages(Number(channelID), messages["timeStamp"])
        }, 50000);
        return () => clearInterval(interval);

    },[channelID, messages["timeStamp"], ])

    console.log(messages["timeStamp"])
    // console.log(loading)
    if (loading) return <h1>loading</h1>
    // console.log(messages["timeStamp"])
    // setTimeStamp(messages["messages"].slice(-1)[0].timestamp)

    return (
        <div>
            <Messages/>
            <MessageForm channel={channelID} />
        </div>
    );
};

const mapStateToProps = ({ messages, user }) => ({
    messages,
    user,
    loading: !messages["messages"].length,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setMessages: (channelId, timeStamp) => dispatch(fetchMessages(channelId, timeStamp)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
