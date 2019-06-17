import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import profile from "./profile/reducer";
import activeChat from "./chat/reducer";
import chatList from "./chatList/reducer";
import profileList from "./profileList/reducer";
import { customMiddleware } from "./middelware";

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const appReducer = combineReducers({
    profile,
    activeChat,
    chatList,
    profileList
});
const rootReducer = (state, action) => {
    if (action.type === 'LOGGED_OUT') {
        state = undefined;
    }

    return appReducer(state, action);
};

const store = createStore(
    rootReducer,
    //applyMiddleware(customMiddleware)
    composeEnhancers(applyMiddleware(customMiddleware))
);

export default store;
