import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chatSelect } from "../../lib/chatList/actions";
import { ListGroupItem } from 'reactstrap';
import Avatar from 'react-avatar';

const Chat = ({ userId, chat, onChatSelect }) => {
    let membersList = '';
    Object.keys(chat.members).forEach((key) => {
        if (userId !== key && chat.members[key].displayName) {
            membersList += ((membersList ? ', ' : '') + chat.members[key].displayName);
        }
    });
    const chatTitle = chat.title ? chat.title : membersList;
    return (
        <ListGroupItem className="chat" onClick={onChatSelect(chat)} style={{ display: 'flex' }}>
            <Avatar
                name={chatTitle}
                round={false}
                size={30}
                style={{ margin: 5 }}
            />
            <div style={{
                display: 'flex',
                'flex-direction': 'column',
                'white-space': 'nowrap',
                'overflow': 'hidden'
            }}>
                <span style={{
                    'font-size': 15,
                    'text-overflow': 'ellipsis',
                    'overflow': 'hidden'
                }}>{chatTitle}</span>
                <span style={{
                    'font-size': 10,
                    'text-overflow': 'ellipsis',
                    'overflow': 'hidden'
                }}>{chat.lastMessage}</span>
            </div>

        </ListGroupItem>
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