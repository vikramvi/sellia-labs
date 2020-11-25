import React, { useContext, useState, useEffect } from "react";
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
import { ChatContext } from "./ChatContext";

const eliza = new Eliza();

const Chat = (props) => {
  const { user } = useContext(ChatContext);

  console.log("user ->", user);

  const { currentPost, userId } = props;

  const [currentListing, setcurrentListing] = useState({});

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
        image: currentPost.gallery && currentPost.gallery[0],
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

  useEffect(() => {
    console.log("useEffect in");

    console.log("currentPost ->", currentPost);
    if (currentPost) {
      setupCloudChat(currentPost);
    }

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
    if (currentListing) {
      await chatdb.ref("chats/" + currentListing.chatId).push({
        message: value,
        timestamp: Date.now(),
        uid: userId,
        listingID: currentPost.id,
      });
    }
  };

  const resetChat = () => {
    setChats([]);
  };

  const onListingSelect = (item) => {
    setcurrentListing(item);
    chatdb.ref("chats/" + item.chatId).on("value", (snapshot) => {
      let chats = [];
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      console.log("snapshot ->", chats);
      setChats(chats);
    });
  };

  return (
    <ChatProvider>
      <Wrapper>
        <Sidebar $isActive={toggleSidebar}>
          <ChatSidebar
            userId={userId}
            resetChat={resetChat}
            setToggleSidebar={setToggleSidebar}
            onListingSelect={onListingSelect}
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
