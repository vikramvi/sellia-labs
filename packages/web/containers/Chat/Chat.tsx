import React, { useState, useEffect } from "react";
import Eliza from "elizabot";
import { BsArrowLeft } from "react-icons/bs";
import ChatProvider from "./ChatContext";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatHeader from "./ChatHeader/ChatHeader";
import ShowChats from "./ShowChats/ShowChats";
import ChatInput from "./ChatInput/ChatInput";
import Wrapper, {
  Sidebar,
  Message,
  Header,
  ArrowButton,
  Body,
  Footer,
} from "./Chat.styled";
import { chatdb } from "../../helpers/init";

const eliza = new Eliza();

const Chat = ({ currentPost, userId }) => {
  const [chats, setChats] = useState([]);
  const [value, setValue] = useState("");
  const [listen, setListen] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const getNodename = (senderID, receiverID, listingID) => {
    const chatNode =
      senderID > receiverID
        ? "" + senderID + receiverID + listingID
        : "" + receiverID + senderID + listingID;
    console.log("chat node ->", chatNode);

    return chatNode;
  };

  const setupCloudChat = async (currentPost) => {
    const sellerID = currentPost.authorId;
    const listingID = currentPost.id;
    const from = currentPost.author && currentPost.author.name;

    let chat_id = getNodename(userId, sellerID, listingID);
    const chatNode = {
      [chat_id]: {
        chatId: chat_id,
        title: currentPost.title,
        listingID: listingID,
        sellerID: sellerID,
      },
    };

    if (from) {
      chatNode[chat_id].from = from;
    }

    console.log(chatNode);

    //check for user id
    if (userId !== sellerID) {
      await chatdb.ref("user_chats/" + userId).update({
        ...chatNode,
      });

      await chatdb.ref("user_chats/" + sellerID).update({
        ...chatNode,
      });
    }
  };

  if (currentPost) {
    setupCloudChat(currentPost);
  }

  useEffect(() => {
    const setReply = () => {
      const reply = eliza.transform(value);
      chats.push({ id: Date.now(), type: "eliza", message: reply });
      setChats([...chats]);
      setListen(false);
    };
    setTimeout(() => {
      if (listen) setReply();
    }, 1000);

    // scroll to bottom
    const chatBody = document.getElementById("chatBody");
    chatBody.scrollTop = chatBody.scrollHeight;
  }, [listen]);

  const handleChat = async (e) => {
    e.preventDefault();
    if (value === "") {
      return alert("Please write your message!");
    }
    chats.push({ id: Date.now(), type: "author", message: value });
    setChats([...chats]);
    setValue("");
    setListen(true);

    //send to firebase chat
    await chatdb.ref("chats/" + generalChannel).push({
      content: message,
      timestamp: Date.now(),
      uid: 21,
      sellerID: email.sellerID,
      listingID: email.listingID,
      author: firstName || companyEmail,
      fromID: companyEmail,
    });
  };

  const resetChat = () => {
    setChats([]);
  };

  return (
    <ChatProvider>
      <Wrapper>
        <Sidebar $isActive={toggleSidebar}>
          <ChatSidebar
            resetChat={resetChat}
            setToggleSidebar={setToggleSidebar}
          />
        </Sidebar>
        <Message>
          <Header>
            <ArrowButton onClick={() => setToggleSidebar(!toggleSidebar)}>
              <BsArrowLeft />
            </ArrowButton>
            <ChatHeader />
          </Header>
          <Body id="chatBody">
            <ShowChats chats={chats} />
          </Body>
          <Footer>
            <ChatInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSubmit={handleChat}
            />
          </Footer>
        </Message>
      </Wrapper>
    </ChatProvider>
  );
};

export default Chat;
