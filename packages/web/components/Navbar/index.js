import React from 'react';
import Button from 'reusecore/src/elements/Button';
import Logo from '../Logo';
import Search from '../Search';
import Menu from '../Menu';
import { NavbarWrapper } from './style';
import logoImg from 'core/static/images/headless-logo.svg';
import { SEARCH_PAGE } from 'core/navigation/constant';

const Navbar = ({
  onToggle,
  userId,
  isLoggedIn,
  logout,
  buttonIcon,
  menuButtonIcon,
  dropdownMenuIcon,
  pathname,
  avatar,
}) => {
  return (
    <NavbarWrapper>
      <Logo logoSrc={logoImg} title="Headless Logo" />
      {pathname !== '/' && pathname !== SEARCH_PAGE ? (
        <>
          <Search
            className="topSearch lg-show"
            style={{ flexGrow: 1, marginLeft: 100, marginRight: 100 }}
          />
        </>
      ) : null}

      <Button
        icon={buttonIcon}
        onClick={onToggle}
        className="sm-hidden"
        variant="textButton"
      />

      <Menu
        className="md-show"
        userId={userId}
        isLoggedIn={isLoggedIn}
        logout={logout}
        buttonIcon={menuButtonIcon}
        dropdownMenuIcon={dropdownMenuIcon}
        avatar={avatar}
      />
    </NavbarWrapper>
  );
};

export default Navbar;
