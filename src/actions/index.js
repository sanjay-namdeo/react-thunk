import jsonPlaceholder from "../components/jsonPlaceholder";
import _ from 'lodash';

const fetchPostsAndUsers = () => {
    return async function (dispatch, getState) {
        await dispatch(fetchPosts()); // Wait to fetch posts
        const posts = getState().posts; // Get all posts
        // get unique user id
        const users = _.uniq(posts.map(post => post.userId));
        for (let user of users) {
            dispatch(fetchAuthor(user));
        }
    }
}

const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POST',
            payload: response
        })
    }
};

const fetchAuthor = (authorId) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${authorId}`);
        dispatch({
            type: 'FETCH_AUTHOR',
            payload: response
        });
    }
}

export {fetchPosts, fetchAuthor, fetchPostsAndUsers};