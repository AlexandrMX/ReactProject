import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { profileSelect } from "../../lib/profileList/actions";
import { DropdownItem } from 'reactstrap';
import ProfileAvatar from '../ProfileAvatar/profile-avatar';

const Profile = ({ profile, onProfileSelect }) => {
    return (
        <DropdownItem
            className="list-group-item"
            onClick={onProfileSelect(profile)}>
            <ProfileAvatar profile={profile} style={{ size: 30 }} />
            {profile.displayName}
        </DropdownItem >
    );
};

Profile.propTypes = {
    profile: PropTypes.object,
    onProfileSelect: PropTypes.func
};


const mapDispatchToProps = dispatch => {
    return { onProfileSelect: (p) => () => dispatch(profileSelect(p)) };
};


export default connect(null, mapDispatchToProps)(Profile);