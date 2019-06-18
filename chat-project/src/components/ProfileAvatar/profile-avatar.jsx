import React from "react";
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dot: {
        height: ({ size=30 }) => `${size*0.4}px`,
        width: ({ size=30 }) => `${size*0.4}px`,
        top: ({ size=30 }) => `${size}px`,
        right: ({ size=30 }) => `${size*0.27}px`,
        border: ({ size=30 }) => `solid ${size*0.07}px white`,
    },
    active: {
        background: 'green',
    },
    inactive: {
        display: 'none'
    }
});

const ProfileAvatar = ({ profile, style }) => {
    const classes = useStyles({size: style.size});
    return (
        <Badge
            variant="dot"
            classes={{ dot: classes.dot + ' ' + (profile.status === 'active' ? classes.active : classes.inactive) }}>
            <Avatar
                name={profile.displayName}
                color={profile.color}
                src={`data:image/jpeg;base64,${profile.avatar}`}
                round={true}
                size={style.size}
                style={{ margin: style.size/6 }}
            />
        </Badge>
    );
};

ProfileAvatar.propTypes = {
    profile: PropTypes.object
};

export default ProfileAvatar;