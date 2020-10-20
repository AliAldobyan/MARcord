import React, {useRef, useEffect} from 'react';
import MessageBox from "./MessageBox";
import {connect} from "react-redux";

const Messages = ({ messages }) => {
    const message = messages["messages"].map((message) => (
        <MessageBox key={message.id} message={message} />
    ))
    const bottomRef = useRef();

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        scrollToBottom()
        const timeout = setTimeout(() => {
            scrollToBottom()
        }, 500);
        return () => clearTimeout(timeout);
    }, [message])

    return (
        <div >
            {message}
            <div ref={bottomRef} className="list-bottom" > </div>
        </div>
    );
};

const mapStateToProps = ({ messages, user }) => ({
    messages,
    user,
    loading: !messages["messages"].length,
});

export default connect(mapStateToProps)(Messages);
