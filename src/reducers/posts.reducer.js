const posts = (oldPosts = [], action) => {
  if(action.type === 'FETCH_POST') {
      return [...action.payload.data];
  }
  return oldPosts;
};

export default posts;