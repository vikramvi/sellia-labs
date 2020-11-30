import React, { useState } from "react";

interface ContextProps {
  user: {
    id: string;
    name: string;
    title: string;
    image: any;
    message: string;
    isActive: boolean;
  };
  handleSelectedUser: Function;
}

export const ChatContext = React.createContext({} as ContextProps);

const ChatProvider = (props) => {
  const [user, setUser] = useState<any>();

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
