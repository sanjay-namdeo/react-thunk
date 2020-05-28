import {combineReducers} from "redux";

const posts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POST':
            return [...action.payload.data];
        default:
            return state;
    }
};

const authors = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_AUTHOR':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default combineReducers({posts: posts, authors:authors});