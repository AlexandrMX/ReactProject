import dbRef from '../dbRef';
import { addChat } from '../chatList/actions';
import { addProfile } from '../profileList/actions';
import firebase from 'firebase';
import Cookie from 'js-cookie';

export const runLogin = (username, password) => ({ getState, dispatch }) => {
    getState().profile.id = username ? username : getState().profile.id; //dont do this, CHANGE ME
    const userId = getState().profile.id;
    dispatch(addChat(userId));
    dispatch(addProfile(userId));
    return { type: "RUN_LOGIN" };
};

export const authDone = ({ id, email }) => ({
    type: 'AUTH_DONE',
    user: { id, email }
});

export const authUser = (username, password) => ({ dispatch }) => {
    console.log(username, password)
    firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(firebaseUser => {
            console.log(firebaseUser.user, "PPPPPP")
            const { uid, email } = firebaseUser.user;

            Cookie.set('chat_user', uid);
            Cookie.set('chat_user_email', email);

            return { uid, email };
        })
        .then(() => dispatch(initialiseListeners()));

    return { type: 'AUTH_USER' };
};
// export const setUsername = username =>  {
//     return { type: 'SET_USERNAME', username };
// }

// export const setPassword = password => {
//     return {type: 'SET_PASSWORD', password}
// }

export const initialiseListeners = () => ({ dispatch }) => {
    const uid = Cookie.get('chat_user');
    const email = Cookie.get('chat_user_email');
    console.log ('!!!!!!', uid )
    if (uid) {
        console.log ('????????', uid )
        dispatch(authDone({ id: uid, email }));
        dispatch(addChat(uid))
        dispatch(addProfile(uid))
    }

    return { type: 'INITIALISE_LISTENERS' };
};

