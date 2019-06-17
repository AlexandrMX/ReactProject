const defChat = {
    id: "NO_ID",
    messages: [],
    title: 'NO_TIITLE',
    lastMessage: 'NO_LAST_MESSAGE',
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
        case 'ADD_CHAT_MESSAGE': {
            const { chatId, msg, id } = action;
            if (state.id === chatId) {
                const messages = [...state.messages, { ...msg, id }];
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