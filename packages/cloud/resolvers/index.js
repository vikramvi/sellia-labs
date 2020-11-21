"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _Queries = require("./Queries");

var _Mutations = require("./Mutations");

var resolvers = {
  Query: _Queries.Query,
  Author: _Queries.AuthorQuery,
  Post: _Queries.PostQuery,
  Category: _Queries.CategoryQuery,
  Mutation: _Mutations.Mutation
};
exports.resolvers = resolvers;