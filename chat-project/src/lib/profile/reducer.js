const initialState = {
    username: 'energizerrtu@gmail.com',
    password: 'qwerty12345',
    user: null,
    id: 'user_id_01'
};


const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_DONE': {
            return { ...state, user: action.user };
        }
        default:
            return state;
    }
};

export default profile;