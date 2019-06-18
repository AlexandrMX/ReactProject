const defChat = {
    id: "NO_ID",
    messages: [],
    title: '',
    lastMessage: '',
    members: null,
    draftMessage: {
        user: 'NO_USER_ID',
        text: ''
    },
    chatType: 'user'
};


const activeChat = (state = defChat, action) => {
    switch (action.type) {
        case 'CREATE_DRAFT_MSG': {
            const { msg } = action;
            return { ...state, draftMessage: { ...msg } };
        }
        case 'SET_ACTIVE_CHAT': {
            const { chat } = action;
            return { ...defChat, ...chat };
        }
        case 'ADD_CHAT_MEMBER': {
            const { chatId, member } = action;
            const member_id = member.id;
            if (state.id === chatId) {
                const members = { ...state.members, [member_id]: member };
                return { ...state, members };
            }
            return state;
        }
        case 'ADD_CHAT_MESSAGE': {
            const { chatId, msg, member } = action;
            if (state.id === chatId) {
                const messages = [...state.messages, { ...msg, user: { ...member } }];
                messages.sort((first, second) => {
                    return first.timestamp > second.timestamp ? 1 : -1;
                });
                return { ...state, messages };
            }
            return state;

        }
        default:
            return state;
    }
};

export default activeChat;