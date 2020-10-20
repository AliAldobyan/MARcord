import React from 'react';
import MessageBox from "./MessageBox";
import {connect} from "react-redux";

const Messages = ({ messages }) => {
    const message = messages["messages"].map((message) => (
        <MessageBox key={message.id} message={message} />
    ))
    return (
        <div>
            {message}
        </div>
    );
};

const mapStateToProps = ({ messages, user }) => ({
    messages,
    user,
    loading: !messages["messages"].length,
});

export default connect(mapStateToProps)(Messages);
