import React, { useReducer, createContext } from 'react';

export const STEPS = {
  STEP_CHOOSE_IMAGES: 'STEP_CHOOSE_IMAGES',
  STEP_SET_TITLE_AND_PRICE: 'STEP_SET_TITLE_AND_PRICE',
  STEP_SET_LOCATION: 'STEP_SET_LOCATION',
  STEP_SET_CATEGORY_AND_TAGS: 'STEP_SET_CATEGORY_AND_TAGS',
  STEP_SET_CONTACT_NUMBER: 'STEP_SET_CONTACT_NUMBER',
  STEP_VERIFY_MOBILE_NUMBER: 'STEP_VERIFY_MOBILE_NUMBER',
};

export const adPostSteps = Object.keys(STEPS);

const initState = {
  step: 0,
  adPost: {
    image: {},
    preImage: {},
    authorId: false,
    preGallery: [],
    localGallery: [],
    localImage: {},
    gallery: [],
    title: '',
    slug: '',
    price: 0,
    isNegotiable: true,
    condition: false,
    location: null,
    categories: [],
    content: '',
    contactNumber: '',
    status: 'draft',
  },
};

export default function addPostReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_ADPOST': {
      let key = action.payload.key;
      return {
        ...state,
        adPost: {
          ...state.adPost,
          [key]: action.payload.value,
        },
      };
    }
    case 'UPDATE_FULL_ADPOST': {
      return {
        ...state,
        adPost: {
          ...state.adPost,
          ...action.payload,
        },
      };
    }
    case 'CANCEL_AD_POSTING': {
      return {
        ...state,
        adPost: initState.adPost,
        step: 0,
      };
    }
    case 'UPDATE_STEP': {
      return {
        ...state,
        step: action.payload.step,
      };
    }
    default:
      return state;
  }
}
export const AddPostContext = createContext({});
export const AddPostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addPostReducer, initState);
  return (
    <AddPostContext.Provider value={{ state, dispatch }}>
      {children}
    </AddPostContext.Provider>
  );
};
