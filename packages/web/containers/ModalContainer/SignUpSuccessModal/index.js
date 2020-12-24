import React from "react";
import Icon from "react-icons-kit";
import { androidDone } from "react-icons-kit/ionicons/androidDone";
import Text from "reusecore/src/elements/Text";

import SignUpSuccessModalWrapper, { IconWrapper } from "./style";
const SignUpSuccessModal = (props) => (
  <SignUpSuccessModalWrapper>
    <IconWrapper>
      <Icon icon={androidDone} size={28} />
    </IconWrapper>

    <Text
      content="Thank You!"
      as="span"
      fontSize={21}
      fontWeight={700}
      color="#333333"
      mb={15}
    />

    <Text
      content="Please check you inbox to complete verification process."
      as="span"
      fontSize={16}
      fontWeight={400}
      color="#8C8C8C"
      style={{ textAlign: "center" }}
    />
  </SignUpSuccessModalWrapper>
);
export default SignUpSuccessModal;
