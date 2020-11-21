import React from 'react';
import ContentLoader from 'react-content-loader';

const SliderLoader = props => (
  <ContentLoader
    rtl
    height={650}
    width={760}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="690.23" y="-59" rx="4" ry="4" width="117" height="6.4" />
    <rect x="673" y="-53" rx="3" ry="3" width="85" height="6.4" />
    <rect x="498" y="-54" rx="3" ry="3" width="350" height="6.4" />
    <rect x="506" y="-41" rx="3" ry="3" width="380" height="6.4" />
    <rect x="610" y="-49" rx="3" ry="3" width="201" height="6.4" />
    <circle cx="686" cy="-42" r="30" />
    <rect x="3.23" y="3.67" rx="0" ry="0" width="751.66" height="494.78" />
    <rect x="4.23" y="523.67" rx="0" ry="0" width="132" height="119" />
    <rect x="159.23" y="523.67" rx="0" ry="0" width="132" height="119" />
    <rect x="314.23" y="523.67" rx="0" ry="0" width="132" height="119" />
    <rect x="469.23" y="524.67" rx="0" ry="0" width="132" height="119" />
    <rect x="623.23" y="523.67" rx="0" ry="0" width="132" height="119" />
  </ContentLoader>
);
export default SliderLoader;
