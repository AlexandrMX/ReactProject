import React from 'react';
import classes from './myPosts.component.css';
import Post from './Post/post';

const MyPosts = () => {
    return (
        <div className={classes.profile}>
            <textarea></textarea>
            <button>Add Post</button>
            <img alt='avatar' src='http://www.followingthenerd.com/site/wp-content/uploads/avatar.jpg_274898881.jpg'/>
            <div className={classes.dv}>
                <Post message='Hi, how it is going'/>
                <Post message='Quet good :)))'/>
            </div>
        </div>
    )
};

export default MyPosts;