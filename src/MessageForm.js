import React, {useState} from 'react';
import { postMessage} from "./redux/actions";
import {connect} from "react-redux";

const MessageForm = ({ channel, sendMessage }) => {
    const initial = { message: "" }
    const [message, setMessage] = useState(initial)

    const handleChange = event => {
        setMessage({ ...message, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(message)
        sendMessage(message, channel)
        setMessage(initial)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" value={message.message} required onChange={handleChange}/>
                <button type="submit">send</button>
            </form>
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
        sendMessage: (message, channelId) => dispatch(postMessage(message, channelId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
