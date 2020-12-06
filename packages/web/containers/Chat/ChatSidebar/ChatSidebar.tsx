import React, { useState, useContext, useEffect } from "react";
// RCE CSS
import "react-chat-elements/dist/main.css";
import { IoIosSearch } from "react-icons/io";
import { ChatContext } from "../ChatContext";
import {
  Icon,
  SearchInput,
  Input,
  UserList,
  UserListItem,
  UserListItemImage,
  UserListItemInfo,
  UserName,
  UserMessage,
} from "./ChatSidebar.styled";
// demo data
import { chatData } from "../../../data/chatApp";
import { chatdb, db } from "../../../helpers/init";
import { ChatItem } from "react-chat-elements";

const ChatSidebar = ({
  setToggleSidebar,
  resetChat,
  userId,
  onListingSelect,
}) => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const { user, handleSelectedUser } = useContext(ChatContext);
  const handleOnClick = (item) => {
    console.log("handleOnClick ->", item);

    setToggleSidebar(false);
    onListingSelect(item);
    handleSelectedUser(item);
    resetChat();
  };

  //listen users_chat
  useEffect(() => {
    async function subscribeUserChat() {
      const doc = db
        .collection("user_chats")
        .doc(userId)
        .collection("chats")
        .orderBy("updatedAt", "desc");

      const observer = doc.onSnapshot(
        (docSnapshot) => {
          let chats = [];
          docSnapshot.docChanges().forEach((change) => {
            console.log(
              `Received doc snapshot: ${docSnapshot} - ${change.type}`
            );

            if (change.type === "added") {
              console.log("my chat ->", change.doc.data());
              chats.push(change.doc.data());
              setData(chats);
            }
          });

          // ...
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
    }

    subscribeUserChat();
  }, []);

  const filteredUser = data.filter((item) => {
    console.log("item -->", item);
    return item.from.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <>
      <SearchInput>
        <Icon>
          <IoIosSearch />
        </Icon>
        <Input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </SearchInput>
      <UserList>
        {filteredUser.map((item) => {
          return (
            <UserListItem
              key={`user-item--${item.listingID}`}
              $isActive={item.listingID === (user && user.listingID)}
              onClick={() => handleOnClick(item)}
            >
              <ChatItem
                avatar={item.image}
                alt={item.name}
                title={item.title}
                subtitle={item.from}
                date={(item.updatedAt && item.updatedAt.toDate()) || new Date()}
                unread={0}
              />
            </UserListItem>
          );
        })}
      </UserList>
    </>
  );
};

export default ChatSidebar;
