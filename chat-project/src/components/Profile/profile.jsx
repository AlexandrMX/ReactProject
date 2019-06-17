import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { profileSelect } from "../../lib/profileList/actions";
import { ListGroupItem } from 'reactstrap';
import Badge from '@material-ui/core/Badge';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dot: {
        height: '12px',
        width: '12px',
        top: '30px',
        right: '8px',
        border: 'solid 2px'
    },
    active: {
        background: 'green',
        'border-color': 'white'
    },
    inactive: {
        display: 'none'
    }


});

const Profile = ({ profile, onProfileSelect }) => {
    const classes = useStyles();
    return (
        <ListGroupItem className="profile">
            <div onClick={onProfileSelect(profile)} >
                <Badge 
                    variant="dot" 
                    classes={{ dot: classes.dot + ' ' + (profile.status === 'active' ? classes.active: classes.inactive)}}>
                    <Avatar
                        name={profile.displayName}
                        color={profile.color}
                        src={`data:image/jpeg;base64,${profile.avatar}`}
                        round={true}
                        size={30}
                        style={{ margin: 5 }}
                    />
                </Badge>
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