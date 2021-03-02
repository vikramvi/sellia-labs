import React, { useReducer, createContext } from "react";

const initState = {
  page: 1,
  limit: 3,
  feedFilter: {
    categorySlug: "",
  },
};

export default function feedReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FEED_FILTER": {
      let key = action.payload.key;
      return {
        ...state,
        page: 1,
        feedFilter: {
          ...state.feedFilter,
          [key]: action.payload.value,
        },
      };
    }

    default:
      return state;
  }
}
export const FeedContext = createContext({});
export const FeedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(feedReducer, initState);
  return (
    <FeedContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedContext.Provider>
  );
};
