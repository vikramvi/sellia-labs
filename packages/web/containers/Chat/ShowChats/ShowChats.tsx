import React, { useContext } from "react";
import Emoji from "react-emoji-render";
import Response from "./ShowChats.styled";
import { ChatContext } from "../ChatContext";
import { MessageBox, Avatar } from "react-chat-elements";
import { date } from "yup";

const ShowChats = ({ chats, userId }) => {
  const { user } = useContext(ChatContext);

  return (
    <>
      {console.log("Login user ->", userId)}
      {console.log("new chat", chats)}
      {chats && chats.length
        ? chats.map((chat, index) => (
            <>
              <MessageBox
                position={chat.uid === userId ? "right" : "left"}
                text={chat.content}
                date={chat.createdAt && chat.createdAt.toDate()}
                notch={false}
              />
            </>
            // <Response key={index} $authorTypeMe={chat.uid === userId}>
            //   <Emoji text={chat.content} />
            // </Response>
          ))
        : null}
    </>
  );
};

export default ShowChats;
