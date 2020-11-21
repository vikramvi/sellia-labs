import React from 'react';
import styled from 'styled-components';
// import icons
import {
  FaTwitter,
  FaFacebook,
  FaGooglePlus,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';

import { ShareButtonRoundSquare, ShareBlockStandard } from 'react-custom-share';

const ShareBlockStandards = styled(ShareBlockStandard)`
  .rcs-buttons {
    justify-content: flex-start !important;

    .rcs-button {
      margin: 0;
      margin-right: 15px;
      margin-top: 15px;
      width: 35px;
      height: 35px;

      svg {
        width: 16px;
      }
    }
  }
`;

const SocialShare = props => {
  // create object with props for shareBlock
  const shareBlockProps = {
    url: props.url, // localhost url is not shareable in facebook
    button: ShareButtonRoundSquare,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Email', icon: FaEnvelope },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: props.title,
    longtext: props.subTitle,
  };

  return <ShareBlockStandards {...shareBlockProps} />;
};

export default SocialShare;
