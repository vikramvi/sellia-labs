import React, { useContext } from "react";
import Emoji from "react-emoji-render";
import Response from "./ShowChats.styled";
import { ChatContext } from "../ChatContext";

const ShowChats = ({ chats }) => {
  const { user } = useContext(ChatContext);

  return (
    <>
      {console.log("new chat", chats)}
      {chats && chats.length
        ? chats.map((chat, index) => (
            <Response key={index} $authorTypeMe={chat.uid === user.id}>
              <Emoji text={chat.content} />
            </Response>
          ))
        : null}
    </>
  );
};

export default ShowChats;
