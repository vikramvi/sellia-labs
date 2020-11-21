import React from 'react';
import ContentLoader from 'react-content-loader';

const PostLoader = props => (
  <ContentLoader
    height={300}
    width={260}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="1.61" rx="0" ry="0" width="260" height="220" />
    <rect x="0" y="235" rx="0" ry="0" width="200" height="12" />
    <rect x="0" y="255" rx="0" ry="0" width="120" height="12" />
    <rect x="142.63" y="122.61" rx="0" ry="0" width="0" height="0" />
  </ContentLoader>
);

const ProfileAvatarLoader = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="142.63" y="122.61" rx="0" ry="0" width="0" height="0" />
    <circle cx="80" cy="80" r="80" />
    <rect x="190" y="50" rx="0" ry="0" width="170" height="20" />

    <rect x="190" y="82" rx="0" ry="0" width="13" height="13" />
    <rect x="213" y="82" rx="0" ry="0" width="180" height="13" />

    <rect x="190" y="107" rx="0" ry="0" width="13" height="13" />
    <rect x="213" y="107" rx="0" ry="0" width="140" height="13" />
  </ContentLoader>
);

const GalleryLoader = props => (
  <ContentLoader
    height={850}
    width={730}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <circle cx="86.78" cy="84.61" r="1" />
    <rect x="0" y="0" rx="0" ry="0" width="730" height="650" />
    <rect x="0" y="670" rx="0" ry="0" width="140" height="120" />
    <rect x="160" y="670" rx="0" ry="0" width="140" height="120" />
    <rect x="180" y="670" rx="0" ry="0" width="140" height="120" />
    <rect x="320" y="670" rx="0" ry="0" width="140" height="120" />
    <rect x="480" y="670" rx="0" ry="0" width="140" height="120" />
  </ContentLoader>
);

const ListLoader = props => (
  <div style={{ marginTop: 15, marginBottom: 15 }}>
    <ContentLoader
      height={160}
      width={600}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="180" height="160" />
      <rect x="200" y="0" rx="0" ry="0" width="390" height="13" />
      <rect x="200" y="23" rx="0" ry="0" width="280" height="13" />
      <rect x="200" y="63" rx="0" ry="0" width="70" height="13" />
      <rect x="300" y="63" rx="0" ry="0" width="60" height="13" />
      <rect x="200" y="100" rx="0" ry="0" width="10" height="10" />
      <rect x="220" y="100" rx="0" ry="0" width="130" height="10" />
      <rect x="220" y="120" rx="0" ry="0" width="130" height="10" />
      <rect x="420" y="110" rx="0" ry="0" width="180" height="10" />
    </ContentLoader>
  </div>
);

const CategoryLoader = props => (
  <ContentLoader
    height={70}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    // style={{ width: '100%', height: '100%' }}
    {...props}
  >
    <circle cx="55" cy="30" r="30" />
    <circle cx="86.78" cy="84.61" r="1" />
    <rect x="105" y="15" rx="0" ry="0" width="170" height="10" />
    <rect x="105" y="35" rx="0" ry="0" width="70" height="10" />
  </ContentLoader>
);

const CategoryLoaderCard = props => (
  <ContentLoader
    height={120}
    width={150}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <circle cx="75" cy="50" r="25" />
    <rect x="25" y="85" rx="0" ry="0" width="100" height="15" />
  </ContentLoader>
);

export {
  PostLoader,
  ProfileAvatarLoader,
  ListLoader,
  CategoryLoader,
  CategoryLoaderCard,
};
