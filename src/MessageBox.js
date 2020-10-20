import React from 'react';
import {connect} from "react-redux";

const MessageBox = ({ message, user }) => {
    return (
        <div>
            {
                message.username === user.username ?
                <h5 key={message.id} className="text-danger">{message.username} : <small>{message.message}</small></h5>:
                <h5 key={message.id}>{message.username} : <small>{message.message}</small></h5>
            }
        </div>
    );
};
const mapStateToProps = ({ user }) => ({
    user,
});

export default connect(mapStateToProps)(MessageBox);
