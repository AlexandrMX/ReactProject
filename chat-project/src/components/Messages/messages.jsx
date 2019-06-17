import React from "react";
import './messages.css';
import ProfileAvatar from '../ProfileAvatar/profile';

const Messages = ({ messages, currentUserId }) => {
  return (
    <ul className="Messages-list">
      {messages ? messages.map(message => {
        const { user, text } = message;
        const messageFromMe = user.id === currentUserId;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";
        return (
          <li key={message.id} className={className}>
            <span
              className="avatar"
            //style={{ backgroundColor: user.color }}
            />
            <div className="Message-content">
              <div className="username">
                <ProfileAvatar profile={user} style={{ size: 20 }} />
                <b>{user.displayName}</b>{' ' + (new Date(message.timestamp)).toLocaleString()}
              </div>
              <div className="text">{text}</div>
            </div>
          </li>
        );
      }) : null}
    </ul>
  );
};

export default Messages;
