import React from 'react';
import classes from './header.module.css';
import Login from '../Login/login';
import SignUpContainer from '../SignUp/SignUpContainer';

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt={'logo'}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png' />

            <Login />
            <SignUpContainer/>
        </header>

    );
};

export default Header;