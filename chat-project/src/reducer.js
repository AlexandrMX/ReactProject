const initialState = {
    // items: [],
    username: 'test',
    password: 'test',
    user: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'AUTH_DONE': {
        //     return { ...state, user: action.user };
        // }
        case 'ON_INPUT_CHANGE': {
            const { inputValue } = action;

            return { ...state, inputValue };
        }
        case 'ADD_TASK': {
            const { task } = action;
            const { items } = state;

            return {
                items: [...items, task],
                inputValue: ''
            };
        }

        default:
            return state;
    }
};

export default reducer;