import React from 'react';

import ContentLoader from 'react-content-loader';

const ImgLoader = props => (
  <ContentLoader
    height={200}
    width={265}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="-5" y="-0.33" rx="5" ry="5" width="288" height="201.88" />
    <circle cx="148.84" cy="19.67" r="1" />
  </ContentLoader>
);

export default ImgLoader;
