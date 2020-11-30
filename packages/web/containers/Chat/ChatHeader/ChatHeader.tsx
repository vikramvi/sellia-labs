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
  return (
    <Wrapper>
      {user && (
        <User>
          <Image src={user && user.image.largeUrl} alt={user.name} />
          <Info>
            <Name>{user && user.title}</Name>

            {user && user.isActive && <Indicator />}
          </Info>
        </User>
      )}
      <Button>
        <BsBell />
      </Button>
    </Wrapper>
  );
};

export default ChatHeader;
