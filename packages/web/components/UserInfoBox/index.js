import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  InfoBox,
  ImageWrapper,
  Information,
  Image,
  Title,
  AddressInfo,
  Address,
  OtherInfo,
  PhoneNo,
  PostedTime,
  EditButton,
  IconBox,
} from './userInfoBox.style.js';
import Avatar from 'core/static/images/user-placeholder.svg';
import { PROFILE_PAGE, ACCOUNT_SETTING_PAGE } from 'core/navigation/constant';

const UserInformation = ({
  imgWidth,
  imgHeight,
  source,
  title,
  style,
  imgRadius,
  address,
  addressIcon,
  phoneIcon,
  phoneNumber,
  website,
  websiteIcon,
  titleStyle,
  informationStyle,
  onAuthorTitlePress,
  author,
  postedTime,
  userId,
  authorId,
}) => {
  return (
    <InfoBox style={style}>
      <ImageWrapper
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        imgRadius={imgRadius}
      >
        <Image
          src={source}
          loader={<Image src={Avatar} />}
          unloader={<Image src={Avatar} />}
        />
        {userId && userId === authorId && (
          <Link href={`${ACCOUNT_SETTING_PAGE}?view=edit-profile`}>
            <a>
              <EditButton>Edit</EditButton>
            </a>
          </Link>
        )}
      </ImageWrapper>

      {/*Layout style props for information area*/}
      <Information style={informationStyle}>
        {/*Title props area*/}
        {title && (
          <Link href={`${PROFILE_PAGE}/${author}`}>
            <a>
              <Title onClick={onAuthorTitlePress} style={titleStyle}>
                {title}
              </Title>
            </a>
          </Link>
        )}
        {postedTime && <PostedTime>{postedTime}</PostedTime>}
        {address !== '' && addressIcon ? (
          <AddressInfo>
            {addressIcon && <IconBox>{addressIcon}</IconBox>}
            {address && <Address>{address}</Address>}
          </AddressInfo>
        ) : null}
        {website !== '' && websiteIcon ? (
          <OtherInfo>
            {websiteIcon && <IconBox>{websiteIcon}</IconBox>}
            {website && <PhoneNo>{website}</PhoneNo>}
          </OtherInfo>
        ) : null}
        {phoneNumber !== '' && phoneIcon ? (
          <OtherInfo>
            {phoneIcon && <IconBox>{phoneIcon}</IconBox>}
            {phoneNumber && <PhoneNo>{phoneNumber}</PhoneNo>}
          </OtherInfo>
        ) : null}
      </Information>
    </InfoBox>
  );
};

UserInformation.propTypes = {
  source: PropTypes.any,
  title: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  callNowText: PropTypes.string,
  imgRadius: PropTypes.number,
  phoneNumber: PropTypes.string,
  style: PropTypes.any,
  titleStyle: PropTypes.any,
  informationStyle: PropTypes.any,
  onClick: PropTypes.func,
};

// SingleList.defaultProps = {
//   activeOpacity: 0.8,
//   disabled: false,
//   disabledStyle: { opacity: 0.3 },
//   checked: false,
//   onValueChange: () => {},
// };

export default UserInformation;
