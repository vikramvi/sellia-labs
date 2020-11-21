let GRAPHQL_URL = '';
if (process.env.NODE_ENV === 'development') {
  GRAPHQL_URL = process.env.GRAPHQL_URL_LOCAL;
}
if (process.env.NODE_ENV === 'production' && !process.env.isStaging) {
  GRAPHQL_URL = process.env.GRAPHQL_URL_PRODUCTION;
}
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || null;
const CURRENCY = process.env.CURRENCY || '$';
export { GRAPHQL_URL, GOOGLE_API_KEY, CURRENCY };
