import React from "react";
import PropTypes from 'prop-types';

const Chat = ({ chat}) => {
    return (
        <li className="chat">
            <span>{chat.id}</span>
        </li>
    )
}

Chat.propTypes = {
    item: PropTypes.object
};

export default Chat;
