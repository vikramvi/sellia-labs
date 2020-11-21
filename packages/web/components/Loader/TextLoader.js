import React from 'react';
import ContentLoader from 'react-content-loader';

const TextLoader = props => (
  <ContentLoader
    rtl
    height={60}
    width={400}
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
    <rect x="547.23" y="-138.33" rx="0" ry="0" width="751.66" height="460.15" />
    <rect x="4.23" y="523.67" rx="0" ry="0" width="132" height="119" />
    <rect x="159.23" y="523.67" rx="0" ry="0" width="132" height="119" />
    <rect x="314.23" y="523.67" rx="0" ry="0" width="132" height="119" />
    <rect x="469.23" y="524.67" rx="0" ry="0" width="132" height="119" />
    <rect x="623.23" y="523.67" rx="0" ry="0" width="132" height="119" />
    <rect x="-2.77" y="2.67" rx="0" ry="0" width="450" height="17.94" />
    <rect x="-0.62" y="33.53" rx="0" ry="0" width="323.2" height="16.16" />
    <rect x="258.23" y="13.67" rx="0" ry="0" width="0" height="0" />
    <rect x="254.23" y="10.67" rx="0" ry="0" width="0" height="0" />
    <rect x="212.23" y="11.67" rx="0" ry="0" width="0" height="0" />
  </ContentLoader>
);

export default TextLoader;
