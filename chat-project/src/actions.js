// import { generate } from 'shortid';
import dbRef from './dbRef';
import firebase from 'firebase';


export const authDone = ({ uid, email }) => ({
    type: 'AUTH_DONE',
    user: { uid, email }
});

export const authUser = ({ username, password }) => ({ dispatch }) => {
    console.log(username, password)   
    firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(firebaseUser => {
            console.log( uid, email)
            const { uid, email } = firebaseUser.user;
           
            // Cookie.set('chat_user', uid);
            // Cookie.set('chat_user_email', email);
            dispatch(authDone({ uid, email }));
            return { uid, email };
        })
        // .then(() => dispatch(initialiseListeners()));

    return { type: 'AUTH_USER' };
};
export const setUsername = username =>  {
    return { type: 'SET_USERNAME', username };
}

export const setPassword = password => {
    return {type: 'SET_PASSWORD', password}
}



export const onInputChange = e => ({
    type: 'ON_INPUT_CHANGE',
    inputValue: e.currentTarget.value
});

export const addTask = name => {
    const task = { name, done: false };
    // dbRef.update({ [`items/${task.id}/`]: task });
    return {
        type: 'ADD_TASK',
        task
    };
};

export const checkItem = item => {
    const updatedItem = { ...item, done: !item.done };
    // dbRef.update({ [`items/${item.id}`]: updatedItem });

    return {
        type: 'CHECK_ITEM',
        item: updatedItem
    };
};

export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    item
});