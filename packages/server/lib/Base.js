import { db, storage } from './init';
import { validatePostDataWithLocation, getTimeStamp } from '../helper/utility';

/**
 * This is the Base class to fetch and store data to Firestore
 */
export default class Base {
  constructor() {
    this.db = db;
    this.collection = '';
    this.storageRef = 'images';
  }
  /**
   * Return the collection name
   * @param {String} collection
   */
  getRef(collection) {
    return this.db.collection(collection);
  }

  /**
   * Return all data from a collection with pagination support.
   * @param {Object} query
   */
  async all(query = {}) {
    const limit = query.limit ? query.limit : 1000;
    const page = query.page ? query.page : 1;
    try {
      const data = await this.getRef(this.collection)
        .get()
        .then(async snapshot => {
          const docsAt = (page - 1) * limit;
          const startAt = snapshot.docs[docsAt];
          const totalPosts = snapshot.docs.length;
          return { startAt, totalPosts };
        });
      const { startAt, totalPosts } = data;
      const nextData = await this.getRef(this.collection)
        // .orderBy('createdAt', 'desc')
        .limit(Number(limit))
        .startAt(startAt)
        .get()
        .then(docSnapshot => {
          const data = docSnapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id };
          });
          return data;
        });
      return { data: nextData, total: totalPosts };
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Fetch a document by its ID
   * @param {Object} query
   */
  async byId(query = {}) {
    const id = query.id ? query.id : null;
    try {
      const data = await this.getRef(this.collection)
        .doc(id)
        .get()
        .then(item => {
          return { ...item.data(), id };
        });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Fetch collection with where conditions
   * @param {Object} query
   */
  async where(query = {}) {
    const limit = query.limit ? query.limit : 1000;
    const field = query.field ? query.field : null;
    const operator = query.operator ? query.operator : '==';
    const value = query.value ? query.value : null;
    const multiple = query.multiple ? query.multiple : false;
    const data = [];
    try {
      await this.getRef(this.collection)
        .limit(Number(limit))
        .where(field, operator, value)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            data.push({ ...doc.data(), id: doc.id });
          });
        });
      if (multiple) {
        return data;
      } else {
        return data[0] ? data[0] : {};
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Fetch documents which falls between two range
   * @param {Object} query
   */
  async range(query = {}) {
    const { field, min, max } = query;
    let posts = [];
    try {
      const data = await this.getRef(this.collection)
        .where(field, '>=', min)
        .where(field, '<=', max)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            posts.push({ ...doc.data(), id: doc.id });
          });
          return posts;
        });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Delete a document by its ID
   * @param {Object} query
   */
  async delete(query = {}) {
    const id = query.id ? query.id : null;
    try {
      await this.getRef(this.collection)
        .doc(id)
        .delete() // Deleting a document does not delete its subcollections!
        .then(() => {
          return { id };
        });
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  }

  /**
   * Push a new document under a specific collection
   * @param {Object} query
   */
  async add(query = {}) {
    let data = query.data ? query.data : {};
    data = validatePostDataWithLocation(data);
    data = { ...data, createdAt: getTimeStamp() };
    try {
      const post = await this.getRef(this.collection)
        .add(data)
        .then(doc => {
          return this.byId({ id: doc.id });
        });
      return post;
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  // if you are not sure weather to add or update
  async set(query = {}) {
    const id = query.id ? query.id : null; // id is required
    let data = query.data ? query.data : {};
    data = validatePostDataWithLocation(data);
    data = { ...data, updatedAt: getTimeStamp() };
    try {
      const post = await this.getRef(this.collection)
        .doc(id)
        .set(data, { merge: true })
        .then(() => {
          return this.byId({ id });
        });
      return post;
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  }

  /**
   * Update a document by ID and new data
   * @param {Object} query
   */
  async update(query = {}) {
    const id = query.id ? query.id : null;
    let data = query.data ? query.data : {};
    data = validatePostDataWithLocation(data);
    data = { ...data, updatedAt: getTimeStamp() };
    try {
      const post = await this.getRef(this.collection)
        .doc(id)
        .update(data)
        .then(() => {
          return this.byId({ id });
        });
      return post;
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  }
}
