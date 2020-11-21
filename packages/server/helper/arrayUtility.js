export const arrayToObject = (array, keyField = 'id') => {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
};

export const objectToArray = objectData => {
  const array = Object.keys(objectData).map(i => objectData[i]);
  return array;
};

export const updatedResult = (oldArray, newArray, keyField = 'id') => {
  const oldArrayObj = arrayToObject(oldArray, keyField);
  const newArrayObj = arrayToObject(newArray, keyField);
  const updatedResultObj = { ...oldArrayObj, ...newArrayObj };
  const updatedResultArray = objectToArray(updatedResultObj);
  return updatedResultArray;
};

export const objectIntersection = (
  oldObject = {},
  newObject = {},
  searched = false
) => {
  if (Object.keys(oldObject).length) {
    const filterObject = {};
    for (const key in oldObject) {
      if (newObject.hasOwnProperty(key)) {
        filterObject[key] = newObject[key];
      }
    }
    return filterObject;
  } else {
    if (searched) {
      return {};
    } else {
      return newObject;
    }
  }
};

// This function take existing post results and new post results
// if any id of the new post results match with existing Post
// it replace the old Post item with new Post
// else the Post item get pushed to the existing post results
// return the updated post results
// NB: array to object conversion or storing object in
// state can not keep up with the post order id (ex: recent post ids) as object will
// always self ordered from small to large id hence this function is necessary to keep the sorted order
// otherwise you have to manually handle your result sorted order for object type state
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
