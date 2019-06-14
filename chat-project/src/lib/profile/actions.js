import dbRef from '../dbRef';
import {addChat} from '../chatList/actions'
// import firebase from 'firebase';

export const runLogin = ({ username, password }) => ({ getState, dispatch }) =>{
    const userId = getState().profile.id;
    dispatch(addChat(userId));
    return {type: "RUN_LOGIN"}
}


export const authDone = ({ uid, email }) => ({
    type: 'AUTH_DONE',
    user: { uid, email }
  });





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