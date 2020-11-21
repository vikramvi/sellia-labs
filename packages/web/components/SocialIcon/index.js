import React from 'react';
import Link from 'next/link';
import SocialIconWrapper from './socialicon.style';

const SocialIcon = props => (
  <SocialIconWrapper className={props.className}>
    {props.icons.map((icon, index) => (
      <Link href={icon.path} key={index}>
        <a aria-label={`social-icon-${index}`}>{icon.icon}</a>
      </Link>
    ))}
  </SocialIconWrapper>
);

export default SocialIcon;
