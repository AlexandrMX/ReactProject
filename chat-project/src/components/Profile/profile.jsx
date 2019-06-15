import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { profileSelect } from "../../lib/profileList/actions";

const Profile = ({ profile, onProfileSelect }) => {
    return (
        <li className="profile">
            <span onClick={onProfileSelect(profile)}>{profile.id}</span>
        </li>
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