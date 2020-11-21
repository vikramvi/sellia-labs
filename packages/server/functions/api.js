require('dotenv').config();
const { ApolloServer } = require('apollo-server-cloud-functions');
const admin = require('firebase-admin');
const { resolvers } = require('../resolvers');
const { typeDefs } = require('../TypeDefs');
import { Permissions } from '../middlewares/AuthMiddleware';

const firebaseAdmin = admin.initializeApp(
  {
    credential: admin.credential.cert(require('../config')),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  },
  'server'
);

const getUser = async token => {
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
};

// context
const context = async req => {
  const token =
    req.request && req.request.headers && req.request.headers.authorization
      ? req.request.headers.authorization
      : '';
  const user = token ? await getUser(token) : {};
  const isVerified = user && user.userId ? true : false;
  return {
    req,
    token,
    user,
    isVerified,
    firebaseAdmin,
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  middlewares: [Permissions],
  context,
  playground: true,
  introspection: true,
});

const api = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});

export default api;
