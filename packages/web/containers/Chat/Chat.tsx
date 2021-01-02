import React, { useContext, useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import ChatProvider from "./ChatContext";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatHeader from "./ChatHeader/ChatHeader";
import ShowChats from "./ShowChats/ShowChats";
import ChatInput from "./ChatInput/ChatInput";
import Box from "reusecore/src/elements/Box";

import Wrapper, {
  Sidebar,
  Message,
  Header,
  ArrowButton,
  Body,
  Footer,
} from "./Chat.styled";
import { chatdb, db, firebaseFieldValue } from "../../helpers/init";
import AuthHelper from "../../helpers/authHelper";

import { ChatContext } from "./ChatContext";
import { MessageList } from "react-chat-elements";

const NoConversation = () => (
  <Box flexBox mt={20} justifyContent="center" alignItems="center">
    <div className="_3WOCp">
      <div className="_2ZFwQ">
        <div className="_3WOCp">
          <picture>
            <source
              type="image/webp"
              srcSet="https://statics.olx.in/external/base/img/emptyChat.webp"
            />
            <img
              src="https://statics.olx.in/external/base/img/emptyChat.png"
              className=""
              alt=""
            />
          </picture>
        </div>
        <div className="_30hp2">
          <span>We’ll keep messages for any item you’re selling in here</span>
        </div>
      </div>
    </div>
  </Box>
);

const NoListingSelected = () => (
  <Box flexBox alignItems="center" ml={200}>
    <div className="_2ZFwQ">
      <div className="_3WOCp">
        <picture>
          <source
            type="image/webp"
            srcSet="https://statics.olx.in/external/base/img/emptyChat.webp"
          />
          <img
            src="https://statics.olx.in/external/base/img/emptyChat.png"
            className=""
            alt=""
          />
        </picture>
      </div>
      <div className="_30hp2">
        <span>Select a conversation to see messages</span>
      </div>
    </div>
  </Box>
);

const Chat = (props) => {
  const { user } = useContext(ChatContext);

  console.log("chat props ->", props);

  const { currentPost, userId, loginUser } = props;

  const [currentListing, setcurrentListing] = useState(null);

  const [chats, setChats] = useState([]);
  const [value, setValue] = useState("");
  const [listen, setListen] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [data, setData] = useState([]);

  const [opponentUser, setOpponentUser] = useState(null);

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
    const loginUser = await AuthHelper.getCurrentUser();

    let chatNode = {
      chatId: chat_id,
      title: currentPost.title,
      listingID: listingID,
      price: currentPost.price,
      image: image,
      from: from ? from : "",
      updatedAt: firebaseFieldValue.serverTimestamp(),
      unreadCount: 0,
      seller: {
        id: currentPost.author && currentPost.authorId,
        name: currentPost.author && currentPost.author.name,
        profilePic: currentPost.author && currentPost.author.image.url,
      },
      buyer: {
        id: loginUser.uid,
        name: loginUser.displayName,
        profilePic: loginUser.photoURL,
      },
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

      //opt for notification
      db.collection("notifications")
        .doc(sellerID)
        .collection("user_activity")
        .add(chatNode);
    }
  };

  useEffect(() => {
    console.log("useEffect in");

    console.log("currentPost ->", currentPost);
    if (currentPost) {
      setupCloudChat(currentPost);
    }

    //get conversations
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

    // scroll to bottom
    const chatBody = document.getElementById("chatBody");
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
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
        text: value,
        date: new Date(),
        // date: firebaseFieldValue.serverTimestamp(),
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
        .doc(currentListing.buyer.id)
        .collection("chats")
        .doc(currentListing.chatId)
        .set(
          { updatedAt: firebaseFieldValue.serverTimestamp() },
          { merge: true }
        );

      db.collection("user_chats")
        .doc(currentListing.seller.id)
        .collection("chats")
        .doc(currentListing.chatId)
        .set(
          { updatedAt: firebaseFieldValue.serverTimestamp() },
          { merge: true }
        );

      //update other's unread count
      let otherID;
      if (userId === currentListing.buyer.id) {
        otherID = currentListing.seller.id;
      } else {
        otherID = currentListing.buyer.id;
      }

      const increment = firebaseFieldValue.increment(1);

      // Document reference
      db.collection("user_chats")
        .doc(otherID)
        .collection("chats")
        .doc(currentListing.chatId)
        .update({ unreadCount: increment });

      //opt for notification
      db.collection("notifications")
        .doc(otherID)
        .collection("user_activity")
        .add(data);
    }
  };

  const resetChat = () => {
    console.log("resetChat ->");
    setChats([]);
  };

  const onListingSelect = async (item) => {
    setcurrentListing(item);

    const otherUser = item.seller.id == userId ? item.buyer : item.seller;

    setOpponentUser(otherUser);

    //read from firestore
    const doc = await db
      .collection("chat_messages")
      .doc(item.chatId)
      .collection("messages")
      .orderBy("date", "asc");

    const observer = doc.onSnapshot((docSnapshot) => {
      console.log(`Received doc snapshot: ${docSnapshot}`);
      let arrChat = [];
      docSnapshot.forEach(
        (doc) => {
          console.log("my chat ->", doc.data());
          const dataSource = doc.data();

          arrChat.push(dataSource);

          // arrChat.push({
          //   ...dataSource,
          //   date: dataSource.date.toDate(),
          //   position: dataSource.uid === userId ? "right" : "left",
          //   title: dataSource.uid === userId ? "You" : opponentUser.name,
          // });

          console.log("snapshot ->", arrChat);
          setChats([...arrChat]);

          // scroll to bottom
          const chatBody = document.getElementById("chatBody");
          if (chatBody) {
            chatBody.scrollTop = chatBody.scrollHeight;
          }
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
      {data.length > 0 ? (
        <Wrapper>
          <Sidebar $isActive={toggleSidebar}>
            <ChatSidebar
              data={data}
              userId={userId}
              resetChat={resetChat}
              setToggleSidebar={setToggleSidebar}
              onListingSelect={onListingSelect}
            />
          </Sidebar>
          {currentListing ? (
            <Message>
              <Header>
                <ArrowButton onClick={() => setToggleSidebar(!toggleSidebar)}>
                  <BsArrowLeft />
                </ArrowButton>
                <ChatHeader opponentUser={opponentUser} />
              </Header>
              <Body id="chatBody">
                {/* <MessageList dataSource={chats} /> */}
                <div>
                  <ShowChats
                    userId={userId}
                    chats={chats}
                    opponentUser={opponentUser}
                  />
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
          ) : (
            <NoListingSelected />
          )}
        </Wrapper>
      ) : (
        <NoConversation />
      )}
    </ChatProvider>
  );
};

export default Chat;
