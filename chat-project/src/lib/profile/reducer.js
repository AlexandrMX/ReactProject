const initialState = {
    // items: [],
    username: 'energizerrtu@gmail.com',
    password: 'qwerty12345',
    user: null,
    tempTestId: 'user_id_02'
};


const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_DONE': {
            return { ...state, user: action.user };
        }
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

export default profile;