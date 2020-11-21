import React from 'react';
import ContentLoader from 'react-content-loader';

const CategoryListLoader = props => (
  <ContentLoader
    rtl
    height={75}
    width={320}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="74" y="20.71" rx="4" ry="4" width="248.04" height="12.1" />
    <rect x="74" y="39.59" rx="3" ry="3" width="170" height="11.33" />
    <rect x="519.23" y="-55" rx="3" ry="3" width="350" height="6.4" />
    <rect x="498" y="-56" rx="3" ry="3" width="380" height="6.4" />
    <rect x="497" y="-55" rx="3" ry="3" width="201" height="6.4" />
    <circle cx="37" cy="36" r="30" />
  </ContentLoader>
);

export default CategoryListLoader;
