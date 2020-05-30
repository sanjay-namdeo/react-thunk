import jsonPlaceholder from "../components/jsonPlaceholder";

const fetchPostsAndUsers = () => {
    return async function (dispatch, getState) {
        await dispatch(fetchPosts()); // Wait to fetch posts
        const posts = getState().posts; // Get all posts
        let users = [];
        // get unique user id
        for (let post of posts) {
            if(users.indexOf(post.userId)===-1) {
                users.push(post.userId);
                dispatch(fetchAuthor(post.userId));
            }
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