import React, { useContext } from "react";
import { BsBell } from "react-icons/bs";
import { ChatContext } from "../ChatContext";
import Wrapper, {
  User,
  Image,
  Info,
  Name,
  Indicator,
  UserImage,
  Button,
} from "./ChatHeader.styled";

const ChatHeader = ({ opponentUser }) => {
  const { user } = useContext(ChatContext);
  return (
    <Wrapper>
      {user && (
        <>
          <Button>
            <Image src={user && user.image.largeUrl} alt={user.name} />
            <Info>
              <Name>
                {user && user.title} - {user.price}$
              </Name>
            </Info>
          </Button>
          <User>
            <UserImage src={opponentUser && opponentUser.profilePic} alt={""} />
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
