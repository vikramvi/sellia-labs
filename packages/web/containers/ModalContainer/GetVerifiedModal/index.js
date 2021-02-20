import React, { Component } from "react";
import {
  GetVerifiedModalWrapper,
  ShareLinkWrapper,
  ShareLink,
  CopyButton,
  Notify,
} from "./style";
import Text from "reusecore/src/elements/Text";

import SocialShare from "../../../components/SocialShare";
import { CopyToClipboard } from "react-copy-to-clipboard";

class GetVerifiedModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
    };
  }

  render() {
    return (
      <GetVerifiedModalWrapper>
        <Text
          type="heading"
          as="h3"
          fontSize={20}
          fontWeight={600}
          color="#333333"
          mb="5px"
          content="Get verified to proceed!"
        />

        <ShareLinkWrapper>
          <CopyToClipboard
            onCopy={() => {
              this.setState({ isCpoied: true });
            }}
            text={this.state.text}
          >
            <CopyButton>
              {this.state.isCpoied ? <Notify>Copied</Notify> : null}
              Send verification link
            </CopyButton>
          </CopyToClipboard>
        </ShareLinkWrapper>
      </GetVerifiedModalWrapper>
    );
  }
}

export default GetVerifiedModal;
