const initialState = [];


const profileList = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROFFILE': {
            const { profile, id } = action;
            return [...state, { ...profile, id }];
        }
        default:
            return state;
    }
};

export default profileList;