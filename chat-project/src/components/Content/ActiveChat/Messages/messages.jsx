import React from "react";
import './messages.css';

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
                {user.displayName + ', ' + (new Date(message.timestamp)).toString()}
                </div>
              <div className="text">{text}</div>
                </div>
          </li>
    );
      }) : null}
    </ul>
  );
}

export default Messages;
