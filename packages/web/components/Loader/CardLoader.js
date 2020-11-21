import React from 'react';
import ContentLoader from 'react-content-loader';
const CardLoader = props => (
  <ContentLoader
    rtl
    height={260}
    width={276}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="561.23" y="-60" rx="4" ry="4" width="117" height="6.4" />
    <rect x="588" y="-55" rx="3" ry="3" width="85" height="6.4" />
    <rect x="0.03" y="201.77" rx="3" ry="3" width="276.5" height="16.45" />
    <rect x="1" y="228.54" rx="3" ry="3" width="163.4" height="13.76" />
    <rect x="500" y="-54.48" rx="3" ry="3" width="132.66" height="14.85" />
    <circle cx="600" cy="-51" r="30" />
    <rect x="0.23" y="-0.33" rx="0" ry="0" width="276" height="191.25" />
    <rect x="173.23" y="68.67" rx="0" ry="0" width="1" height="7" />
  </ContentLoader>
);

export default CardLoader;
