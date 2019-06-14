import dbRef from '../dbRef';

export const addChat = (userId) => ({ dispatch }) => {
    const createChat = (chat_id) => {
        dbRef
            .child(`chats/${chat_id}`)
            .once('value')
            .then(d => d.val())
            .then(d => {
                dispatch({ type: 'ADD_CHAT', chat: d , id: chat_id})
            })
    };
    dbRef
        .child('members')
        .on('child_added', d => {
            const chat_id = d.key;
            const chat_members = d.val();
            if (chat_members[userId]) {
                createChat(chat_id);
            }
        }

        );
    return { type: 'LISTEN_ADD_CHAT' }
};