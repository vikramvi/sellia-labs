import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { naviconRound } from 'react-icons-kit/ionicons/naviconRound';
import { plusRound } from 'react-icons-kit/ionicons/plusRound';
import { more } from 'react-icons-kit/ionicons/more';
import { FullPageSpinner } from '../../components/Loader/spinnerLoader';
import { LOGOUT } from 'core/graphql/Mutations';
import { GET_AUTHOR_INFO } from 'core/graphql/Profile.query';
import { useMutation, useQuery } from '@apollo/react-hooks';
import AuthHelper from '../../helpers/authHelper';
import { removeFirebaseCookie } from '../../helpers/session';
import redirect from '../../helpers/redirect';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import Icon from 'react-icons-kit';
import Button from 'reusecore/src/elements/Button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SideDrawer from 'reusecore/src/elements/Drawer';
import { setFirebaseCookie } from '../../helpers/session';
import {
  HOME_PAGE,
  SEARCH_PAGE,
  NEAREST_POST_PAGE,
  RECENT_POST_PAGE,
  CATEGORIES_PAGE,
  SINGLE_CATEGORY_PAGE,
  SINGLE_POST_PAGE,
  FAVOURITE_PAGE,
  PROFILE_PAGE,
  SIGNIN_PAGE,
  SIGNUP_PAGE,
  FORGET_PASSWORD_PAGE,
  RESET_PASSWORD_PAGE,
  ADD_POST,
  ACCOUNT_SETTING_PAGE,
} from 'core/navigation/constant';

const Main = styled.main`
  min-height: 100vh;
  min-height: calc(100vh - 153px);
`;

const DrawerWrapper = styled('div')`
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 70px 20px 50px;
`;

const DrawerLink = styled('span')`
  display: inline-flex;
  padding: 11px 0;

  a {
    color: #333;
  }
`;

export default ({
  children,
  userId = '',
  history,
  isLoggedIn,
  location,
  logout,
  pathname,
}) => {
  const [drawerState, toggleDrawer] = useState(false);
  const [loggingOut, setloggingOut] = useState(false);
  let userAvatar = '';
  let userFallbackAvatar = '';
  const { data, error, loading } = useQuery(GET_AUTHOR_INFO, {
    variables: { USERNAME: userId },
  });
  userAvatar =
    data && data.author && data.author.image && data.author.image.url
      ? data.author.image.url
      : '';
  userFallbackAvatar =
    data && data.author && data.author.image && data.author.image.largeUrl
      ? data.author.image.largeUrl
      : '';

  useEffect(() => {
    if (process.browser && localStorage.getItem('currentLocation') === null) {
      getLocation();
    }
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(storePosition);
  };
  const storePosition = position => {
    setFirebaseCookie('currentLocation', {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const handleLogout = async () => {
    setloggingOut(true);

    const isLoggedOut = await AuthHelper.logout();

    setloggingOut(false);

    if (isLoggedOut === true) {
      removeFirebaseCookie('id_token');
      removeFirebaseCookie('user');
      redirect({}, '/');
    }
  };

  const handleToggle = () => toggleDrawer(!drawerState);

  const DRAWER_MENU = [
    {
      path: HOME_PAGE,
      name: 'Home',
    },
    {
      path: `${ADD_POST}/new`,
      name: 'Add Post',
    },
    {
      path: SEARCH_PAGE,
      name: 'Search Page',
    },
    {
      path: NEAREST_POST_PAGE,
      name: 'Nearest Post Page',
    },
    {
      path: RECENT_POST_PAGE,
      name: 'Recent Post Page',
    },
    {
      path: CATEGORIES_PAGE,
      name: 'Category Page',
    },
  ];

  return (
    <>
      {loggingOut && <FullPageSpinner />}
      <Navbar
        onToggle={handleToggle}
        userId={userId}
        history={history}
        isLoggedIn={isLoggedIn}
        location={location}
        logout={handleLogout}
        buttonIcon={<Icon icon={naviconRound} size={21} color="#ffffff" />}
        menuButtonIcon={<Icon icon={plusRound} size={20} color="#595959" />}
        dropdownMenuIcon={<Icon icon={more} size={40} color="#595959" />}
        pathname={pathname}
        avatar={[userAvatar, userFallbackAvatar]}
      />
      {drawerState && (
        <SideDrawer
          open={drawerState}
          onClose={handleToggle}
          toggleHandler={handleToggle}
          isLoggedIn={isLoggedIn}
          userId={userId}
          logout={logout}
          closeButton={<Icon icon={androidClose} size={21} color="#333333" />}
          closeButtonStyle={{
            display: 'inline-flex',
            position: 'absolute',
            top: 20,
            right: 20,
            cursor: 'pointer',
          }}
        >
          <DrawerWrapper>
            {DRAWER_MENU.map((item, index) => (
              <DrawerLink key={index}>
                <Link href={item.path}>
                  <a>{item.name}</a>
                </Link>
              </DrawerLink>
            ))}

            {isLoggedIn ? (
              <>
                <DrawerLink key={PROFILE_PAGE}>
                  <Link
                    href={`${PROFILE_PAGE}/[username]`}
                    as={`${PROFILE_PAGE}/${userId}`}
                  >
                    <a>Profile</a>
                  </Link>
                </DrawerLink>

                <DrawerLink key={ACCOUNT_SETTING_PAGE}>
                  <Link href={`${ACCOUNT_SETTING_PAGE}?view=edit-profile`}>
                    <a>Account Setting</a>
                  </Link>
                </DrawerLink>
                <Button
                  onClick={handleLogout}
                  title="Logout"
                  variant="textButton"
                  width={1}
                  color="#EF5A5A"
                  style={{
                    minHeight: 'auto',
                    minWidth: 'auto',
                    textDecoration: 'none',
                    justifyContent: 'flex-start',
                    marginTop: 8,
                    marginLeft: '-4px',
                  }}
                />
              </>
            ) : (
              <Link href={SIGNIN_PAGE}>
                <Button
                  title="Login"
                  variant="textButton"
                  width={1}
                  color="#30C56D"
                  style={{
                    minHeight: 'auto',
                    minWidth: 'auto',
                    textDecoration: 'none',
                    justifyContent: 'flex-start',
                    marginTop: 8,
                    marginLeft: '-4px',
                  }}
                />
              </Link>
            )}
          </DrawerWrapper>
        </SideDrawer>
      )}
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
