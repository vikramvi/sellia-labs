import React, { useState } from "react";

interface ContextProps {
  user: {
    id: string;
    name: string;
    image: string;
    message: string;
    isActive: boolean;
  };
  handleSelectedUser: Function;
}

export const ChatContext = React.createContext({} as ContextProps);

const ChatProvider = (props) => {
  const [user, setUser] = useState<any>({
    from: "Terry White",
    listingID: "0pvCrPAbghiWeMec8UDB",
    sellerID: "Wp9vIwTYgDYt5vPbwAFQP5FrGMQ2",
    title: "Fresh Homes Aparment",

    id: "1",
    image: "https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    message: "Nice to meet you!",
    isActive: true,
  });

  const handleSelectedUser = (data) => {
    setUser(data);
  };

  return (
    <ChatContext.Provider value={{ user, handleSelectedUser }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
