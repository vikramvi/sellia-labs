import { GraphQLServer, PubSub } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { typeDefs } from "./TypeDefs";
import { Permissions } from "./middlewares/AuthMiddleware";

const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const cors = require("cors");

const firebaseAdmin = admin.initializeApp(
  {
    credential: admin.credential.cert(require("./config")),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  },
  "server"
);

const getUser = async (token) => {
  try {
    const user = await firebaseAdmin
      .auth()
      .verifyIdToken(token)
      .then((user) => {
        return user;
      });
    return { userId: user.user_id, email: user.email, error: false };
  } catch (error) {
    return { userId: "", email: "", error };
  }
};

const pubsub = new PubSub();
// context
const context = async (req) => {
  const token =
    req.request && req.request.headers && req.request.headers.authorization
      ? req.request.headers.authorization
      : "";
  const user = await getUser(token);
  const isVerified = user && user.userId ? true : false;
  return {
    req,
    token,
    user,
    isVerified,
    pubsub,
    firebaseAdmin,
  };
};
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [Permissions],
  context,
});

const options = {
  port: 4000,
  endpoint: "/",
  playground: "/playground",
  // cors: {
  //   credentials: true,
  //   origin: [process.env.APP_FRONT_END_URL], // your frontend url.
  // },
};

const app = server.express;

// enable cors
var corsOptions = {
  origin: process.env.APP_FRONT_END_URL,
  credentials: true, // <-- REQUIRED backend setting
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

server.start(options, ({ port }) =>
  console.log(`GraphQl Server Started at Port: ${port}`)
);
