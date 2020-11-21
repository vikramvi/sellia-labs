import Post from '../lib/Post';
import Author from '../lib/Author';
import Category from '../lib/Category';

const post = new Post();
const category = new Category();
const author = new Author();

/**
 * All the mutation throughout the App
 */
export const Mutation = {
  /**
   * Mutation for adding a new post to Firestore
   */
  addPost: async (_, { input }) => {
    const postData = {
      authorId: input.authorId,
      title: input.title,
      slug: input.slug,
      status: input.status,
      content: input.content,
      image: input.image,
      categories: [...input.categories],
      price: input.price,
      isNegotiable: input.isNegotiable,
      condition: input.condition,
      gallery: input.gallery,
      location: input.location ? input.location : null,
      formattedLocation: input.location ? input.location : null,
      contactNumber: input.contactNumber,
    };

    // post slug duplication check start
    const allPost = await post.all();
    const postsData =
      allPost && allPost.data && allPost.data.length ? allPost.data : [];
    const postSlug = input.slug;
    let index = -1;
    if (postsData && postsData.length) {
      index = postsData.findIndex(post => post.slug === postSlug);
    }
    let slug;
    if (index !== -1) {
      const uniqueIdentifier = Date.now();
      slug = `${postsData[index].slug}-${uniqueIdentifier}`;
    } else {
      slug = postSlug;
    }
    // post slug duplication check end
    let data;

    // add or update post if id available
    if (input && input.id) {
      data = await post.update({ data: { ...postData }, id: input.id });
      // Start updating the updated post data on the user favorite post
      if (data && data.favoritedBy && data.favoritedBy.length) {
        const favoritedBy = data.favoritedBy;
        const { image, price, slug, title, id } = data;
        const favoritePost = {
          image,
          price,
          slug,
          title,
          id,
        };
        favoritedBy.forEach(userId => {
          author.update({
            data: { favorite: favoritePost },
            id: userId,
          });
        });
      }
      // End updating the updated post data on the user favorite post
    } else {
      data = await post.add({ data: { ...postData, slug: slug } });
    }
    const geopointLocation = data.location ? data.location : null;
    // const geopointHash = data.location ? data.location : null;
    // formated location for the client
    data = { ...data, location: postData.location ? postData.location : null };
    // add the same post into the assinged category
    if (input && input.categories) {
      const {
        categories,
        image,
        price,
        slug,
        title,
        id,
        status,
        condition,
        formattedLocation,
        isNegotiable,
        geohash,
        createdAt,
      } = data;
      const categoryPost = {
        image,
        price,
        slug,
        title,
        id,
        status,
        location: geopointLocation,
        condition,
        formattedLocation,
        isNegotiable,
        geohash,
        createdAt,
      };
      categories.forEach(async categoryItem => {
        const categoryId = categoryItem.id;
        let categoryById;
        categoryById = await category.byId({ id: categoryId });
        if (categoryById.hasOwnProperty('posts')) {
          if (input && input.id) {
            // updated post will be updated into the category
            const postId = input.id;
            const categoryPosts = categoryById['posts'];
            const index = categoryPosts.findIndex(post => post.id === postId);
            if (index !== -1) {
              // if the post id avaialable in the category
              categoryById['posts'][index] = categoryPost;
            } else {
              // if the post id is not available in the category
              categoryById['posts'].push(categoryPost);
            }
          } else {
            // push the new post into the category
            categoryById['posts'].push(categoryPost);
          }
        } else {
          // if category doesn't have any posts in it
          categoryById['posts'] = {};
          categoryById['posts'].push(categoryPost);
        }
        await category.update({ id: categoryId, data: categoryById });
      });
    }
    return data;
  },

  /**
   * Add Category mutation
   */
  addCategory: async (_, { input }) => {
    const categoryData = {
      slug: input.slug,
      name: input.name,
      image: input.image,
    };
    let data;
    // add or update post if id available
    if (input && input.id) {
      data = await category.update({ data: { ...categoryData }, id: input.id });
    } else {
      data = await category.add({ data: { ...categoryData } });
    }
    return data;
  },

  /**
   * Add or edit Author mutation
   */
  addAuthor: async (_, { input }) => {
    const authorData = {
      email: input.email,
      username: input.username,
      website: input.website,
      address: input.address,
      name: input.name,
      image: input.image,
      mobile: input.mobile,
    };
    let data;
    // add or update post if id available
    if (input && input.id) {
      data = await author.update({ data: { ...authorData }, id: input.id });
    } else {
      data = await author.add({ data: { ...authorData } });
    }
    return data;
  },

  /**
   * Logout mutation
   */
  logout: (_, { input }, { req }) => {
    return {
      userId: '',
      email: '',
      error: false,
    };
  },

  /**
   * Login Mutation
   */
  login: async (_, { input }, { req, firebaseAdmin }) => {
    const { userId, email, error } = await author.verifyToken({
      input,
      firebaseAdmin,
    });
    return {
      userId,
      email,
      error,
    };
  },

  /**
   * Registration Mutation
   */
  register: async (_, { input }, { firebaseAdmin }) => {
    const { userId, email, error } = await author.verifyToken({
      input,
      firebaseAdmin,
    });
    if (userId) {
      await author.set({
        data: {
          id: userId,
          email: email ? email : '',
          mobile: input.mobile ? input.mobile : [],
        },
        id: userId,
      });
    }
    return {
      userId,
      email,
      error,
    };
  },

  /**
   * Mutation for Handling user favorite posts
   */
  handleFav: async (_, { input }) => {
    const userId = input.id;
    const postId = input.postId;
    const postById = await post.byId({ id: postId });
    const userById = await author.byId({ id: userId });

    let postFavoritedBy = [];
    if (postById && postById.favouritedBy && postById.favouritedBy.length) {
      // if favouritedBy property available with some userId
      postFavoritedBy = postById.favouritedBy;
      const index = postFavoritedBy.indexOf(userId);
      if (index !== -1) {
        //remove favourited user from the post
        postFavoritedBy.splice(index, 1);
      } else {
        // add favourited user in the post
        postFavoritedBy.push(userId);
      }
    } else {
      // if favouritedBy property not available or return an empty array
      postFavoritedBy.push(userId);
    }
    await post.update({
      data: { ...postById, favouritedBy: postFavoritedBy },
      id: postId,
    });
    // End add or remove userId from post.favouritedBy array

    // Start User Favorite add or remove
    const { image, price, slug, title, id } = postById;
    const favouritePost = {
      image,
      price,
      slug,
      title,
      id,
    };
    let userPost = [];
    if (userById && userById.favourite && userById.favourite.length) {
      userPost = userById.favourite;
      const index = userPost.findIndex(post => post.id === postId);
      if (index !== -1) {
        //remove post from the user, favourite property
        userPost.splice(index, 1);
      } else {
        // add post into the user, favourite property
        userPost.push(favouritePost);
      }
    } else {
      // if favourite property not available in user or return an empty array
      userPost.push(favouritePost);
    }
    const userData = await author.update({
      data: { ...userById, favourite: userPost },
      id: userId,
    });
    let userFavoriteData = [];
    if (userData && userData.favourite && userData.favourite.length) {
      userFavoriteData = userData.favourite;
    }
    // End User Favorite add or remove
    return {
      data: userFavoriteData,
    };
  },
};
