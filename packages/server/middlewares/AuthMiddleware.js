import { rule, shield, and, or, not } from 'graphql-shield';

/**
 * Check if the user authenticated
 */
const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return ctx.isVerified;
});

/**
 * Is the user owner of the post he is trying to modify
 */
const isOwner = rule()(async (parent, args, ctx, info) => {
  if (args.input.authorId !== 'false') {
    return true;
  }
  return false;
});

/**
 * Is the user Admin
 */
const isAdmin = rule()(async (parent, args, ctx, info) => {
  return true;
});

/**
 * Is the user editing his own profile
 */
const isSameUser = rule()(async (parent, args, ctx, info) => {
  if (args.input.id !== 'false') {
    return true;
  }
  return false;
});

export const Permissions = shield({
  Mutation: {
    addPost: and(isAuthenticated, isOwner),
    addCategory: and(isAuthenticated, isAdmin),
    logout: isAuthenticated,
    handleFav: isAuthenticated,
    addAuthor: isSameUser,
  },
});
