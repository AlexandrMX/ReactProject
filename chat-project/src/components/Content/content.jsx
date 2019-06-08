import React from 'react';
import classes from './content.module.css';
import Post from './MyPosts/myPosts';

const Content = () => {
    return (
        <div className={classes.content}>
            <div className={classes.dv}>
                {/*<img alt='im'*/}
                     {/*src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSH87jjzGQzTZL9A3sen6KBrdnQrHIwQpE9fjlehHwaHtVC3NCw'/>*/}
            </div>
            <div>
                {/*<img alt='imm' src=' https://justcreative.com/wp-content/uploads/2017/06/LogoCollection.jpg'/>*/}
            </div>
            <div>
                ava + content
            </div>
            <Post/>

        </div>


    )
};

export default Content;

