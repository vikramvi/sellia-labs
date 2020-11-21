import React from 'react';
import ContentLoader from 'react-content-loader';

const CategoryLoader = props => (
  <ContentLoader
    rtl
    height={150}
    width={190}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="193" y="106" rx="4" ry="4" width="117" height="6.4" />
    <rect x="193" y="122" rx="3" ry="3" width="85" height="6.4" />
    <rect x="367.23" y="-52" rx="3" ry="3" width="350" height="6.4" />
    <rect x="356" y="-66" rx="3" ry="3" width="380" height="6.4" />
    <rect x="518" y="-60" rx="3" ry="3" width="201" height="6.4" />
    <circle cx="626" cy="-45" r="30" />
    <rect x="494.23" y="-123.33" rx="0" ry="0" width="176" height="175" />
    <rect x="254.23" y="118.67" rx="0" ry="0" width="33" height="11" />
    <circle cx="93.4" cy="60.51" r="42.67" />
    <rect x="26.23" y="115.28" rx="0" ry="0" width="136.4" height="11.02" />
    <rect x="27.23" y="133.79" rx="0" ry="0" width="134.85" height="11.1" />
    <rect x="100.23" y="154.67" rx="0" ry="0" width="8" height="1" />
    <rect x="32.23" y="155.67" rx="0" ry="0" width="0" height="0" />
    <rect x="110.23" y="129.67" rx="0" ry="0" width="0" height="0" />
  </ContentLoader>
);

export default CategoryLoader;
