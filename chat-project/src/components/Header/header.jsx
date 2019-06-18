import React from 'react';
import { connect } from 'react-redux';
import classes from './header.module.css';
import Login from '../Login/login';
import Logout from '../Logout/logout';
import SignUpContainer from '../SignUp/SignUpContainer';

const Header = ({uid}) => {
    return uid ? (
        <header className={classes.header}>
            <img alt={'logo'}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png' />
            <Logout/>
        </header>

      ) : (
        <header className={classes.header}>
            <img alt={'logo'}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png' />
        </header>
    );
};

const mapStateToProps = state => {
    return { uid: state.profile.id };
};

export default connect(mapStateToProps)(Header);