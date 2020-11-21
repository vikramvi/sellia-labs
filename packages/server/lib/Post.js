import Base from './Base';
import Category from './Category';
import {
  getDocsInsideRedius,
  sortByKey,
  pagination,
  fuzzySearch,
} from '../helper/utility';
import { distance, getNearestDocs } from '../helper/geohashUtility';
import {
  arrayToObject,
  objectToArray,
  objectIntersection,
} from '../helper/arrayUtility';

class Post extends Base {
  constructor(args) {
    super(args);
    this.collection = 'posts';
  }

  /**
   * @param  {String} path
   * @return {arrayObject} posts
   */
  async allPost(query = {}) {
    const status = query.status ? query.status : 'publish';
    const limit = query.limit ? query.limit : 10;
    const page = query.page ? query.page : 1;
    try {
      const data = await this.getRef('posts')
        .where('status', '==', status)
        .get()
        .then(async snapshot => {
          const docsAt = (page - 1) * limit;
          const startAt = snapshot.docs[docsAt];
          const total = snapshot.docs.length;
          return { startAt, total };
        });
      const { startAt, total } = data;
      const nextData = await this.getRef('posts')
        .where('status', '==', status)
        .limit(Number(limit))
        .startAt(startAt)
        .get()
        .then(docSnapshot => {
          const data = docSnapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id };
          });
          return data;
        });
      return { data: nextData, total };
    } catch (error) {
      console.log(error, 'Error');
    }
  }

  /**
   * @param  {String} path
   * @return {ArrayObject} posts
   */
  async relatedPosts(query = {}) {
    try {
      const { value, field } = query;
      const category = new Category();
      let result = await this.where({ field, value });
      const postData = result
        ? result.categories.map(category => {
            return category.slug;
          })
        : [];

      const categoryPosts = await category.postBySlugs({ data: postData });
      let posts = categoryPosts[0]
        ? categoryPosts[0].filter(post => post.slug !== value)
        : [];
      // posts = categoryPosts[0].filter(post => post.slug !== value);
      return posts.slice(0, 4);
    } catch (error) {
      console.log(error, 'Error');
    }
  }

  /**
   * Fetch posts near to the user location it is used for search page
   * @param {Object} query
   */
  async nearestPosts(query = {}) {
    const { location, radius } = query;
    const limit = query.limit ? query.limit : 1000;
    const page = query.page ? query.page : 1;
    const center = { lat: Number(location.lat), lon: Number(location.lng) };
    const collection = this.getRef(this.collection);
    const nearestPoints = await getNearestDocs(collection, center, radius);
    const data = nearestPoints.length ? nearestPoints[0] : [];
    const nearestInsideRadius = getDocsInsideRedius(data, radius);
    const nearestData = sortByKey(nearestInsideRadius, 'distance');
    const nearest = pagination(nearestData, page, limit);
    return nearest;
  }

  /**
   * Fetch posts near to the user location
   * @param {Object} query
   */
  async nearest(query = {}) {
    const { location, radius } = query;
    const limit = query.limit ? query.limit : 1000;
    const page = query.page ? query.page : 1;
    const center = { lat: Number(location.lat), lon: Number(location.lng) };
    const collection = this.getRef(this.collection);
    const nearestPoints = await getNearestDocs(collection, center, radius);
    const data = nearestPoints.length ? nearestPoints[0] : [];
    const nearestInsideRadius = getDocsInsideRedius(data, radius);
    const nearestData = sortByKey(nearestInsideRadius, 'distance');
    const nearest = pagination(nearestData, page, limit);
    return { data: nearest, total: nearestData.length };
  }

  /**
   * Get user distance from the post location
   * @param {Object} query
   */
  async userDistance(query = {}) {
    const { userLocation, postLocation } = query;
    const location1 = [Number(userLocation.lat), Number(userLocation.lng)];
    const location2 = [Number(postLocation.lat), Number(postLocation.lng)];
    const dist = await distance(location1, location2);
    return dist;
  }

  /**
   * The full search functionality
   * @param {Object} query
   */
  async search(query = {}) {
    let searched = false;
    const category = new Category();
    const data = query.data ? query.data : {};
    const {
      categories,
      condition,
      isNegotiable,
      price,
      location,
      radius,
      sorting,
      page,
      limit,
      text,
    } = data;
    let filteredObject = {};
    if (!searched) {
      if (text) {
        const limit = 10000;
        const allPosts = await this.all({ limit });
        const allPostsData = allPosts.data;
        const postData = fuzzySearch(allPostsData, text);
        const allPostsDataObject = arrayToObject(postData, 'id');
        filteredObject = objectIntersection(
          filteredObject,
          allPostsDataObject,
          searched
        );
        searched = true;
      }
      if (categories && categories.length) {
        const categoryPosts = await category.postBySlugs({ data: categories });
        const categoryPostsLastItem = categoryPosts[categoryPosts.length - 1];
        // const categoryPostsObject = arrayToObject(
        //   categoryPostsLastItem,
        //   'postId'
        // );
        const categoryPostsObject = arrayToObject(categoryPostsLastItem, 'id');
        filteredObject = objectIntersection(
          filteredObject,
          categoryPostsObject,
          searched
        );
        searched = true;
      }
      if (price && price.length && price.length > 1) {
        const field = 'price';
        const min = price[0];
        const max = price[1];
        const pricePosts = await this.range({ field, min, max });
        const pricePostObject = arrayToObject(pricePosts, 'id');
        filteredObject = objectIntersection(
          filteredObject,
          pricePostObject,
          searched
        );
        searched = true;
      }
      if (condition !== null && condition !== undefined) {
        const conditionPosts = await this.where({
          field: 'condition',
          value: condition,
          multiple: true,
        });
        const conditionPostsObject = arrayToObject(conditionPosts, 'id');
        filteredObject = objectIntersection(
          filteredObject,
          conditionPostsObject,
          searched
        );
        searched = true;
      }
      if (isNegotiable !== null && isNegotiable !== undefined) {
        const isNegotiablePosts = await this.where({
          field: 'isNegotiable',
          value: isNegotiable,
          multiple: true,
        });
        const isNegotiablePostsObject = arrayToObject(isNegotiablePosts, 'id');
        filteredObject = objectIntersection(
          filteredObject,
          isNegotiablePostsObject,
          searched
        );
        searched = true;
      }
      if (location && radius) {
        const nearestPosts = await this.nearestPosts({ location, radius });
        const nearestPostsObject = arrayToObject(nearestPosts, 'id');
        filteredObject = objectIntersection(
          filteredObject,
          nearestPostsObject,
          searched
        );
        searched = true;
      }
    }
    if (!searched) {
      const allPosts = await this.all({});
      const allPostsData = allPosts.data;
      const allPostsDataObject = arrayToObject(allPostsData, 'id');
      filteredObject = objectIntersection(
        filteredObject,
        allPostsDataObject,
        searched
      );
    }

    const ObjectToArray = objectToArray(filteredObject);
    let filteredArray = ObjectToArray.filter(post => post.status === 'publish');

    // Sorting Start
    if (
      sorting &&
      Object.keys(sorting).length &&
      sorting['field'] &&
      sorting['type']
    ) {
      if (sorting['field'] === 'distance') {
        if (location && radius) {
          filteredArray = sortByKey(
            filteredArray,
            sorting['field'],
            sorting['type']
          );
        }
      } else {
        filteredArray = sortByKey(
          filteredArray,
          sorting['field'],
          sorting['type']
        );
      }
    }
    // Sorting End
    // Pagination Start
    const paginatedData = pagination(filteredArray, page, limit);
    // Pagination End
    const filterdData = {
      data: paginatedData,
      total: filteredArray.length,
    };
    return filterdData;
  }
}

export default Post;
