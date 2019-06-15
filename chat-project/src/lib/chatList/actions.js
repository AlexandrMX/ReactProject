import dbRef from '../dbRef';
import { setActiveChat } from '../chat/actions';

export const addChat = (userId) => ({ dispatch }) => {
    const createChat = (chat_id, chat_members) => {
        dbRef
            .child(`chats/${chat_id}`)
            .once('value')
            .then(d => d.val())
            .then(d => {
                dispatch({ type: 'ADD_CHAT', chat: {...d, members: chat_members }, id: chat_id });
            });
    };
    dbRef
        .child('members')
        .on('child_added', d => {
            const chat_id = d.key;
            const chat_members = d.val();
            if (chat_members[userId]) {
                createChat(chat_id,chat_members);
            }
        }

        );
    return { type: 'LISTEN_ADD_CHAT' };
};

export const chatSelect = (chat) => ({ dispatch }) => {
    dispatch(setActiveChat(chat));
    return { type: 'SELECT_CHAT' };
};