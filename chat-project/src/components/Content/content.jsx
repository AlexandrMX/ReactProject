import React from 'react';
import classes from './content.module.css';
import ChatList from '../ChatList/chat-list';
import ProfileList from '../ProfileList/profile-list';
import ActiveChat from '../ActiveChat/active-chat';

const Content = () => {
    return (
        <div className={classes.content}>
            <div style={{border: '2px solid black'}}>
                <ChatList />
            </div>
            <div style={{border: '2px solid black'}}>
                <ProfileList />
            </div>
            <div style={{border: '2px solid black'}}>
                <ActiveChat />
            </div>
        </div>
    );
};

export default Content;

