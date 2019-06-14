import dbRef from '../dbRef';

export const setActiveChat = (chat) => ({ getState, dispatch }) => {
    //unsubscribe from previous messge listener
    const oldChatId = getState().activeChat.id;
    dbRef
        .child(`messages/${oldChatId}`)
        .off('child_added');
    const newChatId = chat.id;
    dbRef
        .child(`messages/${newChatId}`)
        .orderByChild('timestamp')
        .on('child_added', d => {
            const msg_id = d.key;
            const msg = d.val();
            dbRef
                .child(`profiles/${msg.user}`)
                .once('value', d => { 
                    const user = d.val();
                    user.id = d.key; 
                    msg.user = user;
                    dispatch({ type: 'ADD_CHAT_MESSAGE', chatId: newChatId, msg, id: msg_id }) 
                });
        }

        );
    return { type: 'SET_ACTIVE_CHAT', chat }
};