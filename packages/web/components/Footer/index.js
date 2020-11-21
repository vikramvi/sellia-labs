import React from 'react';
import SocialIcon from '../SocialIcon';
import FooterWrapper from './style';
import Icon from 'react-icons-kit';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialPinterest } from 'react-icons-kit/ionicons/socialPinterest';
import { socialInstagram } from 'react-icons-kit/ionicons/socialInstagram';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialGoogleplus } from 'react-icons-kit/ionicons/socialGoogleplus';

const SOCIAL_ICONS = [
  {
    icon: <Icon icon={socialFacebook} size={18} color="#fff" />,
    path: '#',
  },
  {
    icon: <Icon icon={socialTwitter} size={18} color="#fff" />,
    path: '#',
  },
  {
    icon: <Icon icon={socialInstagram} size={18} color="#fff" />,
    path: '#',
  },
  {
    icon: <Icon icon={socialPinterest} size={18} color="#fff" />,
    path: '#',
  },
  {
    icon: <Icon icon={socialGoogleplus} size={18} color="#fff" />,
    path: '#',
  },
];

const footer = () => (
  <FooterWrapper>
    <SocialIcon className="social-icon" icons={SOCIAL_ICONS} />
    <p className="footer-copyright">
      &copy; {new Date().getFullYear()} Headless -
      <a href="http://redq.io">RedQ, Inc.</a>
    </p>
  </FooterWrapper>
);

export default footer;
