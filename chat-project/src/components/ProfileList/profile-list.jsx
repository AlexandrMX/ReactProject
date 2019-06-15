import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from '../Profile/profile';

const ProfileList = ({ profileList }) => {
    return (
        <ul className="profile-list">
            {profileList.map((profile, index) => (
                <Profile key={`profile-${index}`} profile={profile} />
            ))}
        </ul>
    );
};

ProfileList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.array])
};

const mapStateToProps = state => {
    return { profileList: state.profileList };
};

export default connect(mapStateToProps)(ProfileList);