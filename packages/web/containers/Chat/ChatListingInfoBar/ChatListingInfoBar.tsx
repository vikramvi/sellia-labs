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
import Text from "reusecore/src/elements/Text";
import Box from "reusecore/src/elements/Box";
import { timeDifference } from "../../../helpers/utility";
import { Carousel, SectionWrapper } from "./singlePost.style";

const ChatListingInfoBar = ({
  data,
  setToggleSidebar,
  resetChat,
  userId,
  onListingSelect,
}) => {
  // const [data, setData] = useState([]);

  console.log("data -->", JSON.stringify(data));

  const postImage =
    data && data.image && data.image.largeUrl !== null
      ? data.image.largeUrl
      : "";
  let postGallery = data && data.gallery ? data.gallery : [];

  const {
    imageSrc,
    title,
    price,
    currency,
    imageStyle,
    titleStyle,
    priceStyle,
    item,
    condition,
    createdAt,
    originalPrice,
    content,
  } = data || {};

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
    <Box
      flexBox
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#44BB3F",
        justifyContent: "flex-start",
      }}
    >
      <Box borderBottom="1px solid #e2e2e2">
        {
          <Carousel showThumbs={false} showIndicators={false}>
            {postGallery.map((image, index) => (
              <div key={index} style={{ height: "auto" }}>
                <img
                  src={image.largeUrl}
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                  }}
                />
              </div>
            ))}
          </Carousel>
        }

        <Box flexBox flexDirection="column">
          <Box
            mt="1"
            flexBox
            flexDirection="row"
            justifyContent="flex-start"
            alignItem="flex-start"
          >
            {title && (
              <Text
                mb="0"
                content={title}
                style={{
                  ...titleStyle,
                  fontSize: "14px",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              />
            )}
            {"   "}
            {condition && (
              <Text
                ml="2"
                content={condition && "(" + condition + ")"}
                style={{
                  ...titleStyle,
                  fontSize: "10px",
                  color: "grey",
                  fontWeight: "bold",
                }}
              />
            )}
          </Box>

          {createdAt && (
            <Text
              style={{
                color: "#30C56D",
                fontWeight: "bold",
                fontSize: "12px",
              }}
              content={timeDifference(new Date().getTime(), createdAt * 1000)}
              mb="2"
            />
          )}
        </Box>
        <Box></Box>
        <Box></Box>
        <Box
          flexBox
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          {price && currency && (
            <Text
              mt="2"
              mb="0"
              content={`${currency} ${price}`}
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            />
          )}
          {originalPrice && currency && (
            <del
              style={{
                marginRight: "0px",
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              ${originalPrice}
            </del>
          )}
        </Box>

        {content && <Text content={content} {...priceStyle} mb="5" mt="5" />}
      </Box>
    </Box>
  );
};

export default ChatListingInfoBar;
