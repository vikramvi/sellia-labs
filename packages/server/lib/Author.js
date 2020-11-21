import Base from './Base';

/**
 * Author class to run author base query
 */
class Author extends Base {
  constructor(args) {
    super(args);
    this.collection = 'users';
  }

  /**
   * Verify the current user's token
   * @param {Object} query
   * @returns {userId, email, error}
   */
  async verifyToken(query = {}) {
    const { input, firebaseAdmin } = query;
    const { token } = input;
    try {
      const user = await firebaseAdmin
        .auth()
        .verifyIdToken(token)
        .then(user => {
          return user;
        });
      return { userId: user.user_id, email: user.email, error: false };
    } catch (error) {
      return { userId: '', email: '', error };
    }
  }

  /**
   * @param  {String} path
   * @return {arrayObject} posts
   */
  async posts(query = {}) {
    const id = query.id ? query.id : null;
    const status = query.status ? query.status : 'publish';
    const limit = query.limit ? query.limit : 10;
    const page = query.page ? query.page : 1;
    try {
      const data = await this.getRef('posts')
        .where('authorId', '==', id)
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
        .where('authorId', '==', id)
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
   * Fetch user favorite posts
   * @param {Object} query
   */
  async favourite(query = {}) {
    const limit = query.limit ? query.limit : 10;
    const page = query.page ? query.page : 1;
    const id = query.id ? query.id : null;
    try {
      const data = await this.getRef(this.collection)
        .doc(id)
        .get()
        .then(item => {
          return { ...item.data(), id };
        });
      const posts = data ? data.favourite : [];
      const startAt = (page - 1) * limit;
      const endAt = page * limit;
      const userFav = posts && posts.length ? posts.slice(startAt, endAt) : [];
      const totalFav = posts && posts.length ? posts.length : 0;
      return { data: userFav, total: totalFav };
    } catch (error) {
      console.log(error);
    }
  }
}

export default Author;
