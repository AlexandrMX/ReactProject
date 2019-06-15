const initialState = {
    username: 'nergizerrtu@gmail.com',
    password: 'qwerty12345',
    user: null,
    id: ''
};


const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_DONE': {
            return { ...state, ...action.user };
        }

        default:
            return state;
    }
};




export default profile;