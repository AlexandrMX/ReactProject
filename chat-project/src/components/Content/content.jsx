import React from 'react';
import classes from './content.module.css';
import ChatList from './ChatList/chat-list';

const Content = () => {
    return (
        <div className={classes.content}>
            <div>
                <ChatList />
            </div>
        </div>
    )
};

export default Content;

