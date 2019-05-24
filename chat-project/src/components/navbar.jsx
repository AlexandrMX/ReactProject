import React from 'react';
import Profile from './profile'
import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <Profile/>

        </nav>
    )
}

export default Navbar;