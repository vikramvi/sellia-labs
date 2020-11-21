import React, { Component } from 'react';
import {
  ShareModalWrapper,
  ShareLinkWrapper,
  ShareLink,
  CopyButton,
  Notify,
} from './style';
import Text from 'reusecore/src/elements/Text';

import SocialShare from '../../../components/SocialShare';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
      text: props.data.link,
    };
  }

  render() {
    return (
      <ShareModalWrapper>
        <Text
          type="heading"
          as="h3"
          fontSize={20}
          fontWeight={600}
          color="#333333"
          mb="5px"
          content={this.props.data.title}
        />
        <Text
          content={`Posted by ${this.props.data.author}`}
          type="normal"
          size="medium"
          color="#595959"
          mb={15}
          style={{
            fontWeight: '400',
          }}
        />
        <ShareLinkWrapper>
          <ShareLink
            type="text"
            value={this.state.text}
            onChange={e => {
              this.setState({ text: e.target.value, isCpoied: false });
            }}
          />

          <CopyToClipboard
            onCopy={() => {
              this.setState({ isCpoied: true });
            }}
            text={this.state.text}
          >
            <CopyButton>
              {this.state.isCpoied ? <Notify>Copied</Notify> : null}
              Copy link
            </CopyButton>
          </CopyToClipboard>
        </ShareLinkWrapper>

        <SocialShare url={this.state.text} title={this.props.data.title} />
      </ShareModalWrapper>
    );
  }
}

export default ShareModal;
