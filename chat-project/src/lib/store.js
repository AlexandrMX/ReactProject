import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import profile from "./profile/reducer";
import activeChat from "./chat/reducer";
import chatList from "./chatList/reducer";
import profileList from "./profileList/reducer";
import { customMiddleware } from "./middelware";

const store = createStore(
    combineReducers({profile, activeChat, chatList, profileList}),
    applyMiddleware(customMiddleware)
);

export default store;
