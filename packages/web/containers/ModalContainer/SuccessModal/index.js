import React from 'react';
import Icon from 'react-icons-kit';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
import Text from 'reusecore/src/elements/Text';

import SuccessModalWrapper, { IconWrapper } from './style';
const SuccessModal = props => (
  <SuccessModalWrapper>
    <IconWrapper>
      <Icon icon={androidDone} size={28} />
    </IconWrapper>

    <Text
      content="Congrats!!!"
      as="span"
      fontSize={21}
      fontWeight={700}
      color="#333333"
      mb={15}
    />

    <Text
      content="Your account information saved successfully"
      as="span"
      fontSize={16}
      fontWeight={400}
      color="#8C8C8C"
      style={{ textAlign: 'center' }}
    />
  </SuccessModalWrapper>
);
export default SuccessModal;
