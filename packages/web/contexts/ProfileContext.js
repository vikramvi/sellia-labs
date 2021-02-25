import React, { useReducer, createContext } from "react";

const initState = {
  feedFilter: {
    categorySlug: "",
  },
};

export default function profileReducer(state, action) {
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

    default:
      return state;
  }
}
export const ProfileContext = createContext({});
export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initState);
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
