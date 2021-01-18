import React, { useContext } from "react";
import Emoji from "react-emoji-render";
import Response from "./ShowChats.styled";
import moment from "moment";

import { ChatContext } from "../ChatContext";
import { MessageBox, Avatar, SystemMessage } from "react-chat-elements";
import { date } from "yup";

const dateFormatAMPM = (date) => {
  return date.toLocaleString("en-US", { dateStyle: "medium" });
};

const ShowChats = ({ chats, userId, opponentUser }) => {
  const { user } = useContext(ChatContext);
  const opponentProfilePic = opponentUser && opponentUser.profilePic;

  return (
    <>
      {console.log("Login user ->", userId)}
      {console.log("new chat", chats)}
      {chats && chats.length
        ? chats.map((chat, index) => {
            if (chat.type && chat.type === "day") {
              var today = new Date().setHours(0, 0, 0, 0);
              var thatDay = new Date(chat.date).setHours(0, 0, 0, 0);
              return (
                <SystemMessage
                  text={
                    today === thatDay
                      ? "Today"
                      : moment(chat.date).format("Do MMM")
                  }
                />
              );
            }

            if (chat.type && chat.type === "unread") {
              return <SystemMessage text="new messages" />;
            }

            return (
              <MessageBox
                position={chat.uid === userId ? "right" : "left"}
                text={chat.text}
                dateString={
                  chat.date && moment.unix(chat.date / 1000).format("hh:mm a")
                }
                notch={false}
              ></MessageBox>
            );
          })
        : null}
    </>
  );
};

export default ShowChats;
