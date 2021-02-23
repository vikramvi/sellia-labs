import React, { useReducer, createContext } from "react";

const initState = {
  page: 1,
  limit: 8,
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
        feedFilter: {
          ...state.feedFilter,
          [key]: action.payload.value,
        },
      };
    }

    case "UPDATE_PAGE":
      return { ...state, ...action.payload };

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
