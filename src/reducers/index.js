import posts from "./posts.reducer";
import {combineReducers} from "redux";

export default combineReducers({posts: posts});