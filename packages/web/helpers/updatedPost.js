export const updatedPosts = (oldPost, newPost, keyField = 'id') => {
  const updatedPost = [...oldPost];
  if (updatedPost.length) {
    newPost.forEach(Post => {
      const index = updatedPost.findIndex(
        oldPost => oldPost[keyField] === Post[keyField]
      );
      if (index === -1) {
        updatedPost.push(Post);
      } else {
        updatedPost[index] = Post;
      }
    });
  } else {
    return [...newPost];
  }
  return updatedPost;
};
