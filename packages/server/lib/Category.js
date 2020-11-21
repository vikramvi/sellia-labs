import Base from './Base';
import { updatedResult } from '../helper/arrayUtility';

/**
 * Category class to work with category collection
 */
class Category extends Base {
  constructor(args) {
    super(args);
    this.collection = 'category';
  }

  /**
   * Fetch Posts under Category
   * @param {Object} query
   */
  async posts(query = {}) {
    const limit = query.limit ? query.limit : 1000;
    const page = query.page ? query.page : 1;
    const field = query.field ? query.field : null;
    const value = query.value ? query.value : null;

    const data = await this.where({ field, value });
    const posts = data && Object.keys(data).length ? data.posts : [];
    const startAt = (page - 1) * limit;
    const endAt = page * limit;
    const categoryPosts =
      posts && posts.length ? posts.slice(startAt, endAt) : [];
    return { data: categoryPosts, total: posts.length };
  }

  /**
   * Fetch Posts by category slug
   * @param {Object} query
   */
  async postBySlugs(query = {}) {
    const { data } = query;
    let categoryPosts = [];
    const field = 'slug';
    return Promise.all(
      data.map(slug => {
        return new Promise(async (resolve, reject) => {
          let result = await this.where({ field, value: slug });
          const { posts } = result;
          categoryPosts = updatedResult(categoryPosts, posts, 'id');
          resolve(categoryPosts);
        });
      })
    );
  }
}
export default Category;
