const initialState = [];


const chatList = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHAT': {
            const { chat, id } = action;
            return [...state, { ...chat, id }];
        }
        case 'ADD_CHAT_MEMBER_INFO': {
            const { member, id } = action;
            const newState = state.map(chat => {
                const members = { ...chat.members };
                if (chat.id === id && members[member.id]) {
                    members[member.id] = { ...member };
                }
                return { ...chat, members };
            });
            return newState;
        }
        default:
            return state;
    }
};

export default chatList;