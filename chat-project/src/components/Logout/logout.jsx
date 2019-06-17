import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../lib/profile/actions';
import classes from './logout.component.css';

const Logout = ({ logOut }) => {
    return (
        <div>
            <button className={classes.logout_btn} onClick={logOut}>Logout</button>
        </div>
    );
};

export default connect(
    null,
    { logOut }
)(Logout);