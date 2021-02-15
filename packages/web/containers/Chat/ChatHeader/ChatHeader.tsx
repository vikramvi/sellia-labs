import React, { useContext } from "react";
import { BsBell } from "react-icons/bs";
import { ChatContext } from "../ChatContext";

const PlaceholderImage = require("core/static/images/thumb-grid-placeholder.svg");
const profileImg = require("core/static/images/user-placeholder.svg");

import Img from "react-image";

import Wrapper, {
  User,
  Image,
  Info,
  Name,
  Indicator,
  UserImage,
  Button,
} from "./ChatHeader.styled";
const profileImgStyle = { width: "40px", height: "40px" };
const listingImgStyle = { width: "60px", height: "60px" };

const ChatHeader = ({ opponentUser }) => {
  const { user } = useContext(ChatContext);
  return (
    <Wrapper>
      {user && (
        <>
          <Button>
            <Img
              src={user && user.image.largeUrl}
              alt={""}
              style={listingImgStyle}
              loader={<img style={listingImgStyle} src={PlaceholderImage} />}
              unloader={<img style={listingImgStyle} src={PlaceholderImage} />}
            />
            {/* <Image src={user && user.image.largeUrl} alt={user.name} /> */}
            <Info>
              <Name>
                {user && user.title} - {user.price}$
              </Name>
            </Info>
          </Button>
          <User>
            <Img
              src={opponentUser && opponentUser.profilePic}
              style={profileImgStyle}
              loader={
                <img
                  style={profileImgStyle}
                  src={profileImg}
                  alt="profile picture"
                />
              }
              unloader={
                <img
                  style={profileImgStyle}
                  src={profileImg}
                  alt="profile picture"
                />
              }
            />

            {/* <UserImage src={opponentUser && opponentUser.profilePic} alt={""} /> */}
            <Info>
              <Name>{opponentUser && opponentUser.name}</Name>
              {user && user.isActive && <Indicator />}
            </Info>
          </User>
        </>
      )}
    </Wrapper>
  );
};

export default ChatHeader;
