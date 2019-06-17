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
            <ProfileAvatar profile={user} style={{ size: 22 }} />
            <div className="Message-content">
              <div className="username">
                {user.displayName}
              </div>
              <div className="text">{text}</div>
              <div className="date">
                {(new Date(message.timestamp)).toLocaleString()}
              </div>
            </div>
          </li>
        );
      }) : <></>}
    </ul>
  );
};

export default Messages;
