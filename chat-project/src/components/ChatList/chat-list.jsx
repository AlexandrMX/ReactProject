import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Chat from '../Chat/chat';
import { ListGroup } from 'reactstrap';

const ChatList = ({ chatList , userId}) => {
    return (
        <>
            <h2>Conversations</h2>
            <ListGroup className="chat-list">
                {chatList.map((chat, index) => (
                    <Chat key={`chat-${index}`} chat={chat} userId={userId} />
                ))}
            </ListGroup>
        </>
    );
};

ChatList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.array]),
    userId: PropTypes.string
};

const mapStateToProps = state => {
    return { chatList: state.chatList, userId: state.profile.id };
};

export default connect(mapStateToProps)(ChatList);