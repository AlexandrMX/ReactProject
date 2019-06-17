import dbRef from '../dbRef';
import { addChat } from '../chatList/actions';
import { addProfile } from '../profileList/actions';
import firebase from 'firebase';
import Cookie from 'js-cookie';


export const signUp = (display_name, email, password) => ({ dispatch }) => {
    console.log(display_name, email, password);
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
            dbRef.update({ [`/profiles/${user.user.uid}`]: { displayName: display_name, userName: email } });
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
        .then(() => dispatch(initialiseListeners()));

    return { type: 'AUTH_USER' };
};

export const getProfileInfo = (id) => ({ dispatch }) => {
    dbRef
        .child(`profiles/${id}`)
        .once("value", e => {
            const { displayName, avatar } = e.val();

            dispatch({ type: 'ADD_PROFILE_INFO', profile: { displayName, avatar } });
        });
};

export const logOut = () => ({ dispatch }) => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            Cookie.remove('chat_user');
            Cookie.remove('chat_email');
            dispatch({ type: 'LOGGED_OUT' });
        })
        .catch(error => dispatch({ type: 'LOGOUT_ERROR', error }));

    return { type: 'LOGOUT_STARTED' };
};

export const initialiseListeners = () => ({ dispatch }) => {
    const uid = Cookie.get('chat_user');
    const email = Cookie.get('chat_user_email');
    if (uid) {
        dispatch(authDone({ id: uid, email }));
        dispatch(addChat(uid));
        dispatch(addProfile(uid));
    }

    return { type: 'INITIALISE_LISTENERS' };
};

