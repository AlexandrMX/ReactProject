import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chat from '../Chat/chat';

const ChatList = ({ chatList }) => {
    return (
        <ul className="chat-list">
            {chatList.map((chat, index) => (
                <Chat key={`chat-${index}`} chat={chat} />
            ))}
        </ul>
    );
};

ChatList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.array])
};

const mapStateToProps = state => {
    return { chatList: state.chatList };
};

export default connect(mapStateToProps)(ChatList);