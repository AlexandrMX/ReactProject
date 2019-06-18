import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../lib/profile/actions';
import classes from './logout.component.css';
import { Button } from 'reactstrap';

const Logout = ({ logOut }) => {
    return (
        <div>
            <Button color="danger" className={classes.logout_btn} onClick={logOut}>Logout</Button>
        </div>
    );
};

export default connect(
    null,
    { logOut }
)(Logout);