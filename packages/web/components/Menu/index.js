import React from 'react';
import Link from 'next/link';
import Button from 'reusecore/src/elements/Button';
import DropdownMenu from '../DropdownMenu';
import Image from 'react-image';
import { MenuWrapper, MenuItemWrapper } from './style';
import profileImg from 'core/static/images/user-placeholder.svg';
import {
  HOME_PAGE,
  SEARCH_PAGE,
  NEAREST_POST_PAGE,
  RECENT_POST_PAGE,
  CATEGORIES_PAGE,
  PROFILE_PAGE,
  SIGNIN_PAGE,
  ADD_POST,
  ACCOUNT_SETTING_PAGE,
} from 'core/navigation/constant';
const imageStyle = { width: 40, height: 40, borderRadius: '50%' };

const DROPDOWN_MENU_ITEMS = [
  <Link href={SEARCH_PAGE}>
    <a>Search Page</a>
  </Link>,
  <Link href={NEAREST_POST_PAGE}>
    <a>Nearest Post Page</a>
  </Link>,
  <Link href={RECENT_POST_PAGE}>
    <a>Recent Post Page</a>
  </Link>,
  <Link href={CATEGORIES_PAGE}>
    <a>Category Page</a>
  </Link>,
];

const Menu = ({
  className,
  userId,
  isLoggedIn,
  logout,
  buttonIcon,
  dropdownMenuIcon,
  avatar,
}) => {
  const PROFILE_MENU_ITEMS = [
    <Link href={`${PROFILE_PAGE}/[username]`} as={`${PROFILE_PAGE}/${userId}`}>
      <a>Profile</a>
    </Link>,
    <Link href={`${ACCOUNT_SETTING_PAGE}?view=edit-profile`}>
      <a>Account Setting</a>
    </Link>,
    <Button
      onClick={logout}
      title="Logout"
      variant="textButton"
      width={1}
      color="#EF5A5A"
      style={{
        minHeight: 'auto',
        minWidth: 'auto',
        textDecoration: 'none',
        justifyContent: 'flex-start',
        marginLeft: '-4px',
      }}
    />,
  ];

  return (
    <MenuWrapper className={className}>
      <MenuItemWrapper>
        <Link href={HOME_PAGE}>
          <a> Home </a>
        </Link>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <DropdownMenu
          content={dropdownMenuIcon}
          dropdownDirection="right"
          dropdownItems={DROPDOWN_MENU_ITEMS}
        />
      </MenuItemWrapper>
      <MenuItemWrapper>
        <Link href={`${ADD_POST}/[id]`} as={`${ADD_POST}/new`}>
          <a>
            <Button
              title="Add Post"
              icon={buttonIcon}
              iconPosition="left"
              bg="transparent"
              color="#30C56D"
              border="1px solid #30C56D"
            />
          </a>
        </Link>
      </MenuItemWrapper>
      {!isLoggedIn ? (
        <MenuItemWrapper paddingX="0">
          <Link href={SIGNIN_PAGE}>
            <a>
              <Button title="Join Us" />
            </a>
          </Link>
        </MenuItemWrapper>
      ) : (
        <MenuItemWrapper>
          <DropdownMenu
            dropdownDirection="right"
            content={
              <Image
                src={avatar}
                loader={
                  <img
                    style={imageStyle}
                    src={profileImg}
                    alt="profile picture"
                  />
                }
                unloader={
                  <img
                    style={imageStyle}
                    src={profileImg}
                    alt="profile picture"
                  />
                }
                style={imageStyle}
              />
            }
            dropdownItems={PROFILE_MENU_ITEMS}
          />
        </MenuItemWrapper>
      )}
    </MenuWrapper>
  );
};

export default Menu;
