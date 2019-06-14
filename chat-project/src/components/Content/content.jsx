import React from 'react';
import classes from './content.module.css';
import ChatList from './ChatList/chat-list';
import ActiveChat from './ActiveChat/active-chat'

const Content = () => {
    return (
        <div className={classes.content}>
            <div>
                <ChatList />
            </div>
            <div>
                <ActiveChat/>
            </div>
        </div>
    )
};

export default Content;

