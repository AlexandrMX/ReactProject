import dbRef from '../dbRef';

export const createDraftMessage = (user, text) => ({
    type: 'CREATE_DRAFT_MSG',
    msg: { user, text }
});

export const saveDraftMessage = () => ({ getState, dispatch }) => {
    const chat = getState().activeChat;
    const msg = getState().activeChat.draftMessage;
    dbRef
        .update({
            [`chats/${chat.id}`]: { title: chat.title, lastMessage: msg.text },
            [`members/${chat.id}`]: chat.members
        })
        .then(() => {
            dbRef
                .child(`messages/${chat.id}`)
                .push({
                    ...msg,
                    timestamp: new Date().getTime()
                })
                .then(() => {
                    dispatch({
                        type: 'CREATE_DRAFT_MSG',
                        msg: { user: msg.user, text: '' }
                    });
                });
        });

    return { type: 'SAVE_DRAFT_MSG' };
};


export const setActiveChat = (chat) => ({ getState, dispatch }) => {
    //unsubscribe from previous messge listener
    const oldChatId = getState().activeChat.id;
    dbRef
        .child(`messages/${oldChatId}`)
        .off('child_added');
    const newChatId = chat.id;
    dbRef
        .child(`messages/${newChatId}`)
        .on('child_added', d => {
            const msg_id = d.key;
            const msg = d.val();
            dbRef
                .child(`profiles/${msg.user}`)
                .once('value', d => {
                    const user = d.val();
                    user.id = d.key;
                    msg.user = user;
                    dispatch({ type: 'ADD_CHAT_MESSAGE', chatId: newChatId, msg, id: msg_id });
                });
        }

        );
    return { type: 'SET_ACTIVE_CHAT', chat };
};