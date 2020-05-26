import jsonPlaceholder from "../components/jsonPlaceholder";

const fetchPosts = () => {
    return async function (dispatch) {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POST',
            payload: response
        })
    }
};

export {fetchPosts};