const initialState = {
    // items: [],
    username: 'energizerrtu@gmail.com',
    password: 'qwerty12345',
    user: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_DONE': {
            return { ...state, user: action.user };
        }
        case 'SET_USERNAME': {
            const username = action.username;
            return { ...state, username }
        }
        case 'SET_PASSWORD' : {
            const password = action.password;
            return {...state, password}
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

export default reducer;