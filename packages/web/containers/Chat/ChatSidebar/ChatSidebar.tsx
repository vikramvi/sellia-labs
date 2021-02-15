import React, { useState, useContext, useEffect } from "react";
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
  data,
  setToggleSidebar,
  resetChat,
  userId,
  onListingSelect,
}) => {
  // const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const { user, handleSelectedUser } = useContext(ChatContext);
  const handleOnClick = (item) => {
    console.log("handleOnClick ->", item);

    setToggleSidebar(false);
    onListingSelect(item);
    handleSelectedUser(item);
    resetChat();
  };

  // const filteredUser = data.filter((item) => {
  //   console.log("item -->", item);

  //   if (text) {
  //     return item.from.toLowerCase().includes(text.toLowerCase());
  //   } else {
  //     return true;
  //   }
  // });

  return (
    <>
      {/* <SearchInput>
        <Icon>
          <IoIosSearch />
        </Icon>
        <Input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </SearchInput> */}
      <SearchInput>Chats</SearchInput>
      <UserList>
        {Object.keys(data).map((key) => {
          console.log("data -->", key);
          const item = data[key];
          return (
            <UserListItem
              key={`user-item--${item.listingID}`}
              $listingStatus={item.listingStatus}
              $isActive={item.listingID === (user && user.listingID)}
              onClick={() => handleOnClick(item)}
            >
              <ChatItem
                avatar={item.image && item.image.url}
                alt={item.name}
                title={
                  item.listingStatus === "sold"
                    ? "Sold Out - " + item.title
                    : item.title
                }
                subtitle={
                  userId == item.buyer.id ? item.seller.name : item.buyer.name
                }
                date={(item.updatedAt && item.updatedAt.toDate()) || new Date()}
                unread={
                  item.listingID === (user && user.listingID)
                    ? 0
                    : item.unreadCount || 0
                }
              />
            </UserListItem>
          );
        })}
      </UserList>
    </>
  );
};

export default ChatSidebar;
