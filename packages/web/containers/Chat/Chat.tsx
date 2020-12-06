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
import { chatdb, db, firebaseFieldValue } from "../../helpers/init";
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

  const getNodename = (buyerID, sellerID, listingID) => {
    const chatNode = buyerID + sellerID + listingID;
    console.log("chat node ->", chatNode);

    return chatNode;
  };

  const setupCloudChat = async (currentPost) => {
    const sellerID = currentPost.authorId;
    const listingID = currentPost.id;
    const from = currentPost.author && currentPost.author.name;
    const image =
      currentPost.gallery && currentPost.gallery.length > 0
        ? currentPost.gallery[0]
        : "";

    let chat_id = getNodename(userId, sellerID, listingID);
    const chatNode = {
      chatId: chat_id,
      title: currentPost.title,
      listingID: listingID,
      buyerID: userId,
      sellerID: sellerID,
      image: image,
      from: from ? from : "",
      updatedAt: firebaseFieldValue.serverTimestamp(),
      unreadCount: 0,
    };

    console.log(chatNode);

    //check for user id
    if (userId !== sellerID) {
      db.collection("user_chats")
        .doc(userId)
        .collection("chats")
        .doc(chat_id)
        .set(chatNode, { merge: true });

      db.collection("user_chats")
        .doc(sellerID)
        .collection("chats")
        .doc(chat_id)
        .set(chatNode, { merge: true });
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

    setValue("");
    setListen(true);

    console.log("currentListing -->", currentListing);

    //send to firebase chat
    if (currentListing) {
      const data = {
        content: value,
        createdAt: firebaseFieldValue.serverTimestamp(),
        uid: userId,
        listingID: currentListing.listingID
          ? currentListing.listingID
          : currentListing.id,
      };
      db.collection("chat_messages")
        .doc(currentListing.chatId)
        .collection("messages")
        .add(data);

      db.collection("user_chats")
        .doc(currentListing.buyerID)
        .collection("chats")
        .doc(currentListing.chatId)
        .set(
          { updatedAt: firebaseFieldValue.serverTimestamp() },
          { merge: true }
        );

      db.collection("user_chats")
        .doc(currentListing.sellerID)
        .collection("chats")
        .doc(currentListing.chatId)
        .set(
          { updatedAt: firebaseFieldValue.serverTimestamp() },
          { merge: true }
        );

      //update other's unread count
      let otherID;
      if (userId === currentListing.buyerID) {
        otherID = currentListing.sellerID;
      } else {
        otherID = currentListing.buyerID;
      }

      const increment = firebaseFieldValue.increment(1);

      // Document reference
      db.collection("user_chats")
        .doc(otherID)
        .collection("chats")
        .doc(currentListing.chatId)
        .update({ unreadCount: increment });
    }
  };

  const resetChat = () => {
    console.log("resetChat ->");
    setChats([]);
  };

  const onListingSelect = async (item) => {
    setcurrentListing(item);

    //read from firestore
    const doc = await db
      .collection("chat_messages")
      .doc(item.chatId)
      .collection("messages")
      .orderBy("createdAt", "asc");

    const observer = doc.onSnapshot((docSnapshot) => {
      console.log(`Received doc snapshot: ${docSnapshot}`);
      let arrChat = [];
      docSnapshot.forEach(
        (doc) => {
          console.log("my chat ->", doc.data());
          arrChat.push(doc.data());

          console.log("snapshot ->", arrChat);
          setChats([...arrChat]);
          // scroll to bottom
          const chatBody = document.getElementById("chatBody");
          chatBody.scrollTop = chatBody.scrollHeight;
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
    });

    //clear unread count
    //update other's unread count

    // Document reference
    db.collection("user_chats")
      .doc(userId)
      .collection("chats")
      .doc(item.chatId)
      .set({ unreadCount: 0 }, { merge: true });
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
            <div>
              <ShowChats userId={userId} chats={chats} />
            </div>
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
