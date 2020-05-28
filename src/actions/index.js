import jsonPlaceholder from "../components/jsonPlaceholder";

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
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${authorId}`);
        dispatch({
           type: 'FETCH_AUTHOR',
           payload: response
        });
    }
}

export {fetchPosts, fetchAuthor};