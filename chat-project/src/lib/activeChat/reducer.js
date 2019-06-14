const defChat = {
    id: "NO_ID",
    messages: [],
    title: 'NO_TIITLE',
    lastMessage: 'NO_LAST_MESSAGE'
}


const activeChat = (state = defChat, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CHAT': {
            const { chat } = action;
            return { ...defChat, ...chat }
        }
        case 'ADD_CHAT_MESSAGE': {
            const { chatId, msg, id } = action;
            if (state.id === chatId) {
                const messages = [...state.messages, { ...msg, id }];
                return { ...state, messages }
            }
            return state

        }
        default:
            return state;
    }
};

export default activeChat;