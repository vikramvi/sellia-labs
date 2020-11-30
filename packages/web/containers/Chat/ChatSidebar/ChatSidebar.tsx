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
import { chatdb } from "../../../helpers/init";

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
    console.log("listen userId ->", userId);
    chatdb.ref("user_chats/" + userId).on("value", (snapshot) => {
      let chats = [];
      console.log("snapshot -->", snapshot.val());

      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });

      console.log("chats -->", chats);
      setData(chats);
    });
  }, []);

  const filteredUser = data.filter((item) =>
    item.from.toLowerCase().includes(text.toLowerCase())
  );

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
              <UserListItemImage src={item.image.largeUrl} alt={item.name} />
              <UserListItemInfo>
                <UserName>{item.title}</UserName>
                <UserMessage>{item.from}</UserMessage>
              </UserListItemInfo>
            </UserListItem>
          );
        })}
      </UserList>
    </>
  );
};

export default ChatSidebar;
