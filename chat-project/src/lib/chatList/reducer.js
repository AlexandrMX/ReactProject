const initialState = [];


const chatList = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHAT': {
            const { chat, id } = action;
            return [...state, { ...chat, id }];
        }
        default:
            return state;
    }
};

export default chatList;