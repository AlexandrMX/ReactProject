import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { profileSelect } from "../../lib/profileList/actions";
import { ListGroupItem } from 'reactstrap';
import ProfileAvatar from '../ProfileAvatar/profile';

const Profile = ({ profile, onProfileSelect }) => {
    return (
        <ListGroupItem className="profile">
            <div onClick={onProfileSelect(profile)} >
                <ProfileAvatar profile={profile} style={{ size: 30}} />
                {profile.displayName}
            </div>
        </ListGroupItem >
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