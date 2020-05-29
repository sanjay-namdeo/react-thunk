import jsonPlaceholder from "../components/jsonPlaceholder";
import _ from 'lodash';

const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POST',
            payload: response
        })
    }
};

const fetchAuthor = (authorId) =>{
    return (dispatch) => {
        _fetchUser(authorId, dispatch);
    }
}
// Memorize user data so that only a single network request is sent per user
const _fetchUser = _.memoize(async (authorId, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${authorId}`);
    dispatch({
        type: 'FETCH_AUTHOR',
        payload: response
    });
});

export {fetchPosts, fetchAuthor};