import dbRef from '../dbRef';
import { addChat } from '../chatList/actions';
import { addProfile } from '../profileList/actions';
import firebase from 'firebase';
import Cookie from 'js-cookie';


export const signUp = (display_name, email, password) => ({ dispatch }) => {
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
            dispatch(setProfileInfo(user.user.uid, {
                displayName: display_name ? display_name : email,
                userName: email
            }));
            dispatch(authUser(email, password));
        });

    } catch (error) {
        alert(error);
    }
    return { type: 'SIGN_UP_START' };
};

export const authDone = ({ id, email }) => ({
    type: 'AUTH_DONE',
    user: { id, email }
});

export const authUser = (username, password) => ({ dispatch }) => {
    console.log(username, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(firebaseUser => {
            const { uid, email } = firebaseUser.user;
            Cookie.set('chat_user', uid);
            Cookie.set('chat_user_email', email);
            return { uid, email };
        })
        .then(({ uid }) => dispatch(setProfileInfo(uid, { status: 'active' })))
        .then(() => dispatch(initialiseListeners()));

    return { type: 'AUTH_USER' };
};

export const setProfileInfo = (id, profile) => () => {
    dbRef.child(`/profiles/${id}`).update({ ...profile });
    return { type: 'SET_PROFILE_INFO' };
};

export const getProfileInfo = (id) => ({ dispatch }) => {
    dbRef
        .child(`profiles/${id}`)
        .once("value", e => {
            const profile = e.val();
            dispatch({ type: 'ADD_PROFILE_INFO', profile });
        });
    return { type: 'GET_PROFILE_INFO' };
};

export const logOut = () => ({ getState, dispatch }) => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            Cookie.remove('chat_user');
            Cookie.remove('chat_email');
            dispatch(setProfileInfo(getState().profile.id, { status: 'inactive' }));
            dispatch({ type: 'LOGGED_OUT' });
            dispatch(stopListeners());
        })
        .catch(error => dispatch({ type: 'LOGOUT_ERROR', error }));

    return { type: 'LOGOUT_STARTED' };
};

export const initialiseListeners = () => ({ dispatch }) => {
    const uid = Cookie.get('chat_user');
    const email = Cookie.get('chat_user_email');
    if (uid) {
        dispatch(authDone({ id: uid, email }));
        dispatch(getProfileInfo(uid));
        dispatch(addChat(uid));
        dispatch(addProfile(uid));
    }

    return { type: 'INITIALISE_LISTENERS' };
};

export const stopListeners = () => {
    dbRef.off();
    dbRef.child('members').off();
    dbRef.child('profiles').off();
    return { type: 'STOP_LISTENERS' };
};
