import React from 'react';
import classes from './content.module.css';

const Content = () => {
    return (
        <div className={classes.content}>
            <div>
                <img alt='im' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSH87jjzGQzTZL9A3sen6KBrdnQrHIwQpE9fjlehHwaHtVC3NCw'/>
            </div>
            <div>
                <img alt='imm' src=' https://justcreative.com/wp-content/uploads/2017/06/LogoCollection.jpg'/>
            </div>
            <div>
                ava + content
            </div>
            <div>
                my posts
                <div>
                    New posts
                </div>
                <div >
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>

                </div>
            </div>
        </div>


    )
};

export default Content;

