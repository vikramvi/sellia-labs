import {
  Query,
  AuthorQuery as Author,
  PostQuery as Post,
  CategoryQuery as Category,
} from './Queries';
import { Mutation } from './Mutations';

export const resolvers = {
  Query,
  Author,
  Post,
  Category,
  Mutation,
};
