import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chatSelect } from "../../lib/chatList/actions";

const Chat = ({ chat, onChatSelect }) => {
    return (
        <li className="chat">
            <span onClick={onChatSelect(chat)}>{chat.title ? chat.title :chat.id}</span>
        </li>
    );
};

Chat.propTypes = {
    chat: PropTypes.object,
    onChatSelect: PropTypes.func
};


const mapDispatchToProps = dispatch => {
    return { onChatSelect: (c) => () => dispatch(chatSelect(c)) };
};


export default connect(null, mapDispatchToProps)(Chat);