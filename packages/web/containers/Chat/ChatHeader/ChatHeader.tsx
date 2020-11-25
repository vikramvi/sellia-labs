import React, { useContext } from "react";
import { BsBell } from "react-icons/bs";
import { ChatContext } from "../ChatContext";
import Wrapper, {
  User,
  Image,
  Info,
  Name,
  Indicator,
  Button,
} from "./ChatHeader.styled";

const ChatHeader = () => {
  const { user } = useContext(ChatContext);
  console.log("setting ->", user.image.largeUrl);
  return (
    <Wrapper>
      <User>
        <Image src={user.image.largeUrl} alt={user.name} />
        <Info>
          <Name>{user.title}</Name>
          {user.isActive && <Indicator />}
        </Info>
      </User>
      <Button>
        <BsBell />
      </Button>
    </Wrapper>
  );
};

export default ChatHeader;
