import React from 'react';
import ContentLoader from 'react-content-loader';
import SinglePageDescriptionLoader from './SinglePageDescriptionLoader';
import SliderLoader from './SliderLoader';
const Loader = () => (
  <ContentLoader>
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

export default Loader;

export { SinglePageDescriptionLoader, SliderLoader };
