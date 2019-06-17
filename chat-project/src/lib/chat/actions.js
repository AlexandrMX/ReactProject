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
            [`members/${chat.id}`]: ((object, mapFn) => {
                return Object.keys(object).reduce((result, key) => {
                    result[key] = mapFn(object[key]);
                    return result;
                }, {});
            })(chat.members, () => true)
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
    dbRef
        .child(`members/${oldChatId}`)
        .off('child_added');
    const newChatId = chat.id;
    dbRef
        .child(`messages/${newChatId}`)
        .on('child_added', d => {
            const msg = { ...d.val(), id: d.key };
            dispatch(getMemeberInfo(msg.user, { 
                type: 'ADD_CHAT_MESSAGE', 
                chatId: newChatId, msg 
            }));
        });
    dbRef
        .child(`members/${newChatId}`)
        .on('child_added', d => {
            const member_id = d.key;
            setTimeout(() => {
                dispatch(getMemeberInfo(member_id, {
                    type: 'ADD_CHAT_MEMBER',
                    chatId: newChatId
                }));
            });

        });
    return { type: 'SET_ACTIVE_CHAT', chat };
};

export const getMemeberInfo = (id, action) => ({ dispatch }) => {
    dbRef
        .child(`profiles/${id}`)
        .once('value', d => {
            const member = { ...d.val(), id: d.key };
            dispatch({ ...action, member });
        });
    return { type: 'GET_MEMBER_INFO' };
};
