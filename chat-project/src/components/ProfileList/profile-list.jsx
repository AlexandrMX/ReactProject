import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from '../Profile/profile';
import { NavItem } from 'reactstrap';

const ProfileList = ({ profileList }) => {
    return (
        <NavItem className="list-group">
            <h2>Users</h2>
			{profileList.map((profile, index) => (
                <Profile key={`profile-${index}`} profile={profile} />
            ))}
        </NavItem>
    );
};

ProfileList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.array])
};

const mapStateToProps = state => {
    return { profileList: state.profileList };
};

export default connect(mapStateToProps)(ProfileList);