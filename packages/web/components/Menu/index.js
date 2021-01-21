import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "reusecore/src/elements/Button";
import DropdownMenu from "../DropdownMenu";
import Image from "react-image";
import { MenuWrapper, MenuItemWrapper } from "./style";
import profileImg from "core/static/images/user-placeholder.svg";
import Badge from "../UiElements/Badge/Badge";
import SvgIcon from "../UiElements/SvgIcon/SvgIcon";
import { styled } from "baseui";
import { db } from "../../helpers/init";
import AddPostModal from "../../containers/ModalContainer/AddPostModal";
import { Modal } from "@redq/reuse-modal";

import { BsBell } from "react-icons/bs";
import { IoMdAdd, IoMdHome, IoMdMail } from "react-icons/io";

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
  CHAT_PAGE,
} from "core/navigation/constant";
const imageStyle = { width: 40, height: 40, borderRadius: "50%" };
import { useRouter } from "next/router";
import { openModal } from "@redq/reuse-modal";
import { withTheme } from "styled-components";

export const BellButton = styled("button", ({ $theme }) => ({
  border: 0,
  padding: 0,
  backgroundColor: "transparent",
  cursor: "pointer",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  color: $theme.colors.primaryA,
  transition: "color 0.2s ease",
  ":focus": {
    outline: 0,
  },
  ":hover": {
    color: $theme.colors.accent,
  },
}));

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
  pathname,
  dropdownMenuIcon,
  avatar,
}) => {
  const router = useRouter();

  //unread notification
  const [badgeCount, setbadgeCount] = useState(0);

  const PROFILE_MENU_ITEMS = [
    <Link href={`${PROFILE_PAGE}/[username]`} as={`${PROFILE_PAGE}/${userId}`}>
      <a>Profile</a>
    </Link>,
    <Link href={`${CHAT_PAGE}`}>
      <a>Inbox</a>
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
        minHeight: "auto",
        minWidth: "auto",
        textDecoration: "none",
        justifyContent: "flex-start",
        marginLeft: "-4px",
      }}
    />,
  ];

  //listen users_chat
  useEffect(() => {
    let observer;
    async function subscribeUserChat() {
      const doc = db
        .collection("user_chats")
        .doc(userId)
        .collection("chats");

      observer = doc.onSnapshot(
        (docSnapshot) => {
          let unreadNotification = 0;
          docSnapshot.forEach((change) => {
            let changeData = change.data();
            if (changeData.unreadCount > 0) {
              unreadNotification++;
            }
          });

          //update state
          setbadgeCount(unreadNotification);
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
    }
    subscribeUserChat();
    return observer;
  }, []);

  const handleAddPost = () => {
    openModal({
      className: "customModal",
      overlayClassName: "customeOverlayClass",
      closeOnClickOutside: false,
      config: {
        height: "auto",
        width: 600,
        transition: {
          tension: 150,
        },
      },
      component: AddPostModal,
    });
  };

  return (
    <>
      <MenuWrapper className={className}>
        <MenuItemWrapper>
          <Link href={HOME_PAGE}>
            <IoMdHome size={30} />
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Link href={CHAT_PAGE}>
            <Badge
              icon={<IoMdMail size={30} />}
              count={router.pathname !== CHAT_PAGE ? badgeCount : 0}
            />
          </Link>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Button
            onClick={handleAddPost}
            icon={<IoMdAdd size={30} />}
            bg="transparent"
            color="#30C56D"
          />
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
      <Modal />
    </>
  );
};

export default Menu;
