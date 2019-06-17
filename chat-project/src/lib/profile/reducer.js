const initialState = {
    //username: 'nergizerrtu@gmail.com',
    //password: 'qwerty12345',
    email: null,
    avatar: "",
    displayName: 'NO_NAME',
    id: ''
};


const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_DONE': {
            return { ...state, ...action.user };
        }
        case 'ADD_PROFILE_INFO': {
            return { ...state, ...action.profile };
        }
        case 'LOGGED_OUT': {
            return { uid: null };
        }

        default:
            return state;
    }
};




export default profile;