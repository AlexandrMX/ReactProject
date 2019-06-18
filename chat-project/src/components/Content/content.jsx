import React from 'react';
import classes from './content.module.css';
import ChatList from '../ChatList/chat-list';
import ProfileList from '../ProfileList/profile-list';
import ActiveChat from '../ActiveChat/active-chat';
import Login from '../Login/login';
import SignUpContainer from '../SignUp/SignUpContainer';
import { connect } from 'react-redux';

const Content = ({ uid }) => {
    return (
        uid ? (
            <div className={classes.content}>
                <div className={classes.left_side}>
                    <div style={{ border: '1px solid black' }}>
                        <ChatList />
                    </div>
                    <div style={{ border: '1px solid black' }}>
                        <ProfileList />
                    </div>
                </div>
                <div className={classes.right_side}>
                    <ActiveChat />
                </div>
            </div>
        ) : (
            <div>
                <Login />
                <SignUpContainer />
            </div>
        )
    );
};

const mapStateToProps = state => {
    return { uid: state.profile.id };
};

export default connect(mapStateToProps)(Content);

