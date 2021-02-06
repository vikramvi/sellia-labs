import React from "react";
import { IoIosSend } from "react-icons/io";
import { Input } from "baseui/input";
import Wrapper, { Send } from "./ChatInput.styled";

type PropsType = {
  value: string;
  disabled: boolean;
  inputRef: any;
  onChange: (e) => void;
  onSubmit?: (e) => void;
};

const ChatInput: React.FC<PropsType> = ({
  value,
  onChange,
  onSubmit,
  disabled,
  inputRef,
}) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Input
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder="Write Something"
        overrides={{
          EndEnhancer: {
            style: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        }}
        endEnhancer={
          <Send onClick={onSubmit}>
            <IoIosSend size="18px" />
          </Send>
        }
      />
    </Wrapper>
  );
};

export default ChatInput;
