const postReducer = (oldPosts = [], action) => {
  if(action.type === 'FETCH_POST') {
      return [...action.payload.response];
  }
  return oldPosts;
};

export default postReducer;