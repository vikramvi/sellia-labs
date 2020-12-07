import React, { useContext } from "react";
import Emoji from "react-emoji-render";
import Response from "./ShowChats.styled";
import { ChatContext } from "../ChatContext";
import { MessageBox, Avatar } from "react-chat-elements";
import { date } from "yup";

const ShowChats = ({ chats, userId, opponentUser }) => {
  const { user } = useContext(ChatContext);
  const opponentProfilePic = opponentUser && opponentUser.profilePic;

  return (
    <>
      {console.log("Login user ->", userId)}
      {console.log("new chat", chats)}
      {chats && chats.length
        ? chats.map((chat, index) => (
            <>
              <MessageBox
                title={chat.uid === userId ? "You" : opponentUser.name}
                position={chat.uid === userId ? "right" : "left"}
                text={chat.text}
                date={chat.date && chat.date.toDate()}
                notch={false}
              ></MessageBox>
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
