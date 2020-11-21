import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Image from 'react-image';
import Text from 'reusecore/src/elements/Text';

import Avatar from 'core/static/images/user-placeholder.svg';

const ImageStyle = {
  overflow: 'hidden',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: 15,
  width: 32,
  height: 32,
};

const ProfileSettingInfo = ({
  avatarImage,
  avatarIcon,
  description,
  title,
  iconRight,
  imageProps,
  avatarIconProps,
  style,
  ...props
}) => {
  return (
    <Box
      flexBox
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #e2e2e2"
      style={{
        cursor: 'pointer',
      }}
      pt={15}
      pb={15}
      {...props}
    >
      <Box flexBox alignItems="center">
        {/*Note: if you use avatarImage then ignore avatarIcon props*/}
        {avatarImage && (
          <Image
            src={avatarImage}
            loader={<img style={ImageStyle} src={Avatar} />}
            unloader={<img style={ImageStyle} src={Avatar} />}
            alt={title}
            style={ImageStyle}
          />
        )}
        {avatarIcon && (
          <Box
            flexBox
            alignItems="center"
            justifyContent="center"
            mr={15}
            width={26}
            height={26}
            style={style}
            // {...avatarIconProps}
          >
            {avatarIcon}
          </Box>
        )}
        <Box color="#333333">
          {title && (
            <Text content={title} fontSize="14px" mb="0" fontWeight={400} />
          )}
          {description && <Text fontSize="12px" content={description} mb="0" />}
        </Box>
      </Box>
      {iconRight && iconRight}
    </Box>
  );
};

ProfileSettingInfo.propTypes = {
  /** Title of ProfileSettingInfo. */
  title: PropTypes.string.isRequired,

  /** Descciption of ProfileSettingInfo. */
  description: PropTypes.string,

  /** Callback function when ProfileSettingInfo is pressed. */
  onPress: PropTypes.func,

  /** Custom style for the ProfileSettingInfo */
  style: PropTypes.any,

  /** Custom style for avatarIcon **/
  avatarIconStyle: PropTypes.any,
};

export default ProfileSettingInfo;
