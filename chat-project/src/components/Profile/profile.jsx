import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { profileSelect } from "../../lib/profileList/actions";
import { ListGroupItem } from 'reactstrap';
import Avatar from 'react-avatar';

const Profile = ({ profile, onProfileSelect }) => {
    return (
        <ListGroupItem className="profile">
            <div onClick={onProfileSelect(profile)} >
                <Avatar
                    name={profile.displayName}
                    color={profile.color}
                    src={`data:image/jpeg;base64,${profile.avatar}`}
                    round={true}
                    size={30}
                    style={{ margin: 5 }}
                />
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