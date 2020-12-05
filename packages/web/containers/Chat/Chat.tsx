import React, { useContext, useState, useEffect } from "react";
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
import { chatdb, db } from "../../helpers/init";
import { ChatContext } from "./ChatContext";

const Chat = (props) => {
  const { user } = useContext(ChatContext);

  console.log("user ->", user);

  const { currentPost, userId } = props;

  const [currentListing, setcurrentListing] = useState(null);

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
        from: from ? from : "",
      },
    };

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

    // scroll to bottom
    const chatBody = document.getElementById("chatBody");
    chatBody.scrollTop = chatBody.scrollHeight;
  }, []);

  const handleChat = async (e) => {
    e.preventDefault();
    if (value === "") {
      return alert("Please write your message!");
    }
    chats.push({ id: Date.now(), type: "author", content: value });
    setChats([...chats]);
    setValue("");
    setListen(true);

    console.log("currentListing -->", currentListing);

    //send to firebase chat
    if (currentListing) {
      const data = {
        content: value,
        timestamp: Date.now(),
        uid: userId,
        listingID: currentListing.listingID
          ? currentListing.listingID
          : currentListing.id,
      };
      db.collection("chat_messages")
        .doc(currentListing.chatId)
        .collection("messages")
        .add(data);
    }
  };

  const resetChat = () => {
    console.log("resetChat ->");
    // setChats([]);
  };

  const onListingSelect = async (item) => {
    setcurrentListing(item);

    //read from firestore
    const snapshot = await db
      .collection("chat_messages")
      .doc(item.chatId)
      .collection("messages")
      .get();

    let arrChat = [];
    snapshot.forEach((doc) => {
      console.log("my chat ->", doc.data());
      arrChat.push(doc.data());

      console.log("snapshot ->", arrChat);
      setChats([...arrChat]);
      // scroll to bottom
      const chatBody = document.getElementById("chatBody");
      chatBody.scrollTop = chatBody.scrollHeight;
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
