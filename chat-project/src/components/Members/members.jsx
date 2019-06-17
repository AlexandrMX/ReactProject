import React from "react";
import './members.css';
import ProfileAvatar from '../ProfileAvatar/profile';

const Members = ({ members, currentUserId }) => {
  return (
    <div className="Messages-members">
      <h2>Members</h2>
      {members ? members.map(member => {
        return (
          <span>
            <ProfileAvatar profile={member} style={{ size: 30 }} />
            {member.displayName}
          </span>
        );
      }) : <></>}
    </div>
  );
};

export default Members;
