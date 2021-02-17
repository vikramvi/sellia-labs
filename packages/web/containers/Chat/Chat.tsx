import React, { useContext, useState, useEffect } from "react";
import moment from "moment";
import "./css/main.css";

import { BsArrowLeft } from "react-icons/bs";
import ChatProvider from "./ChatContext";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatListingInfoBar from "./ChatListingInfoBar/ChatListingInfoBar";

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
  <Box
    flexBox
    alignItems="center"
    style={{ width: "100%", flexGrow: 1, marginLeft: "25%" }}
  >
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

export interface ChatRequest {
  authorId: string;
  id: string;
}

const Chat = (props) => {
  const inputRef = React.useRef(null);
  const { user } = useContext(ChatContext);

  const [autoSelectItem, setAutoSelectItem] = props.currentPost
    ? useState<ChatRequest | null>({
        authorId: props.currentPost && props.currentPost.authorId,
        id: props.currentPost && props.currentPost.id,
      })
    : useState<ChatRequest | null>(null);

  console.log("chat props ->", props);

  const { currentPost, userId, loginUser } = props;

  const [currentListing, setcurrentListing] = useState(null);

  const [chats, setChats] = useState([]);
  const [value, setValue] = useState("");
  const [listen, setListen] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [data, setData] = useState({});

  const [opponentUser, setOpponentUser] = useState(null);

  function groupedDays(messages) {
    return messages.reduce((acc, el, i) => {
      const messageDay = moment(el.date).format("YYYY-MM-DD");
      if (acc[messageDay]) {
        return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
      }
      return { ...acc, [messageDay]: [el] };
    }, {});
  }

  function generateItems(messages) {
    const days = groupedDays(messages);
    const sortedDays = Object.keys(days).sort(
      (x, y) => moment(x, "YYYY-MM-DD").unix() - moment(y, "YYYY-MM-DD").unix()
    );

    console.log("sortedDays ->", sortedDays);

    const items = sortedDays.reduce((acc, date) => {
      let sortedMessages = days[date].sort((x, y) => x.date - y.date);

      return acc.concat([{ type: "day", date, id: date }, ...sortedMessages]);
    }, []);
    return items;
  }

  const getNodename = (buyerID, sellerID, listingID) => {
    const chatNode = buyerID + sellerID + listingID;
    console.log("chat node ->", chatNode);

    return chatNode;
  };

  const setupCloudChat = async (currentPost) => {
    const sellerID = currentPost.authorId;
    const listingID = currentPost.id;
    const from = currentPost.author && currentPost.author.name;
    const image = currentPost.image ? currentPost.image : "";

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
        profilePic:
          currentPost.author &&
          currentPost.author.image &&
          currentPost.author.image.url,
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
    }
  };

  useEffect(() => {
    //deafult selection
    console.log("useEffect autoSelectItem ->", autoSelectItem);
    if (autoSelectItem) {
      //post chat id
      let chat_id = getNodename(
        userId,
        autoSelectItem.authorId,
        autoSelectItem.id
      );

      const item = data[chat_id];

      if (item) {
        console.log("auto selection ->", item);
        onListingSelect(item);
      }
    }
  }, [data]);

  useEffect(() => {
    console.log("useEffect in");

    let unsbscribe;
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

      unsbscribe = doc.onSnapshot(
        { includeMetadataChanges: false },
        (docSnapshot) => {
          let newChats = {};
          docSnapshot.forEach((change) => {
            let changeData = change.data();
            newChats[changeData.chatId] = changeData;

            //fetch listing status
            if (changeData.listingID) {
              db.collection("posts")
                .doc(changeData.listingID)
                .get()
                .then((listingDoc) => {
                  newChats[
                    changeData.chatId
                  ].listingStatus = listingDoc.data().status;
                });
            }
          });

          setData(newChats);
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
    }

    // scroll to bottom
    const chatBody = document.getElementById("chatBody");
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
    subscribeUserChat();
    return unsbscribe;
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
        date: Date.now(),
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
    }
  };

  const resetChat = () => {
    console.log("resetChat ->");
    setChats([]);
  };

  const onListingSelect = async (item) => {
    // setcurrentListing(item);
    setAutoSelectItem(null);

    //fetch post data
    if (item.listingID) {
      db.collection("posts")
        .doc(item.listingID)
        .get()
        .then((listingDoc) => {
          item.postData = listingDoc.data();
          setcurrentListing(item);
        });
    }

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
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );
      console.log("snapshot ->", arrChat);

      //unread setup
      if (item.unreadCount > 0) {
        const index = arrChat.length - item.unreadCount;
        arrChat.splice(index, 0, { type: "unread" });
      }

      setChats([...arrChat]);

      // scroll to bottom
      const chatBody = document.getElementById("chatBody");
      if (chatBody) {
        chatBody.scrollTop = chatBody.scrollHeight;
      }

      //select input
      inputRef.current && inputRef.current.focus();
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
      {Object.keys(data).length > 0 ? (
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
            <>
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
                      chats={generateItems(chats)}
                      opponentUser={opponentUser}
                    />
                  </div>
                </Body>
                <Footer>
                  <ChatInput
                    inputRef={inputRef}
                    value={value}
                    disabled={
                      currentListing.listingStatus === "sold" ? true : false
                    }
                    onChange={(e) => setValue(e.target.value)}
                    onSubmit={handleChat}
                  />
                </Footer>
              </Message>
              <Sidebar $isActive={toggleSidebar}>
                <ChatListingInfoBar
                  data={currentListing && currentListing.postData}
                  userId={userId}
                  resetChat={resetChat}
                  setToggleSidebar={setToggleSidebar}
                  onListingSelect={onListingSelect}
                />
              </Sidebar>
            </>
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
