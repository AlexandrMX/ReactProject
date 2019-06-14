import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import profile from "./profile/reducer";
import activeChat from "./activeChat/reducer";
import chatList from "./chatList/reducer";
import { customMiddleware } from "./middelware";

const store = createStore(
    combineReducers({profile, activeChat, chatList}),
    applyMiddleware(customMiddleware)
);

export default store;
