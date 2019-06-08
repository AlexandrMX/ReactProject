import React from 'react';
import classes from './profile.module.css';

    const Profile = () => {
     return (
         <div >
             <div className={classes.item}>
                 <a href='google.com'>Profile</a>
             </div>
             <div className={classes.item}>
                <a href='google.com'>Message</a>
             </div>
             <div className={classes.item}>
                <a href='google.com'>News</a>
            </div>
             <div className={classes.item}>
                <a href='google.com'>Music</a>
            </div>
         </div>
    )
}

export default Profile;