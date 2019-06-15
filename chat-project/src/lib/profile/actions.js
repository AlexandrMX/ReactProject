import dbRef from '../dbRef';
import { addChat } from '../chatList/actions';
import { addProfile } from '../profileList/actions';
// import firebase from 'firebase';

export const runLogin = (username, password) => ({ getState, dispatch }) => {
    getState().profile.id = username ? username : getState().profile.id; //dont do this, CHANGE ME
    const userId = getState().profile.id;
    dispatch(addChat(userId));
    dispatch(addProfile(userId));
    return { type: "RUN_LOGIN" };
};


export const authDone = ({ uid, email }) => ({
    type: 'AUTH_DONE',
    user: { uid, email }
});
