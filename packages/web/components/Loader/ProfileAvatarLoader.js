import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfileAvatarLoader = props => (
  <ContentLoader
    rtl
    height={170}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="149" y="29.18" rx="4" ry="4" width="256.21" height="14.02" />
    <rect x="149" y="72.32" rx="3" ry="3" width="204.64" height="10.23" />
    <rect x="438" y="-63" rx="3" ry="3" width="350" height="6.4" />
    <rect x="456.23" y="-58" rx="3" ry="3" width="380" height="6.4" />
    <rect x="148" y="110.68" rx="3" ry="3" width="166.83" height="8.64" />
    <circle cx="72.13" cy="74.13" r="67.13" />
  </ContentLoader>
);

export default ProfileAvatarLoader;
