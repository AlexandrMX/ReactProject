import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Messages from '../Messages/messages';
import Input from '../Input/input';


const ActiveChat = ({ chat, currentUserId }) => {
    return (
        <div className="chat-conversation">
            <span>Id:{chat.id}  Title:{chat.title}</span>
            <Messages messages={chat.messages} currentUserId={currentUserId} />
            <Input message={chat.draftMessage} currentUserId={currentUserId} />
        </div>
    );
};

ActiveChat.propTypes = {
    chat: PropTypes.oneOfType([PropTypes.object]),
    currentUserId: PropTypes.string
};

const mapStateToProps = state => {
    return {
        chat: state.activeChat,
        currentUserId: state.profile.id
    };
};

export default connect(mapStateToProps)(ActiveChat);