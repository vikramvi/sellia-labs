import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { androidDone } from 'react-icons-kit/ionicons/androidDone';
import { chevronRight } from 'react-icons-kit/ionicons/chevronRight';
import { ADD_POST, SINGLE_POST_PAGE } from 'core/navigation/constant';
import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';

import SuccessModalWrapper, { IconWrapper, ButtonWrapper } from './style';
const PublishModal = ({ data: { slug, title, message } }) => {
  return (
    <SuccessModalWrapper>
      <IconWrapper>
        <Icon icon={androidDone} size={28} />
      </IconWrapper>

      <Text
        content={title}
        as="span"
        fontSize={21}
        fontWeight={700}
        color="#333333"
        mb={15}
      />

      <Text
        content={message}
        as="span"
        fontSize={16}
        fontWeight={400}
        color="#8C8C8C"
        style={{ textAlign: 'center' }}
      />
      <ButtonWrapper>
        {/* <Link href={`/${ADD_POST}/new`}>
          <a>new</a>
        </Link> */}
        <Button
          title="New Post"
          onClick={() => Router.push(`${ADD_POST}/new`)}
          style={{
            width: '100%',
            marginRight: 20,
          }}
        />

        <Button
          title="View Post"
          onClick={() => Router.push(`${SINGLE_POST_PAGE}/${slug}`)}
          style={{
            width: '100%',
            backgroundColor: '#EF5A5A',
          }}
        />

        {/* <Link href={`/${SINGLE_POST_PAGE}/${slug}`}>
          <a>view</a>
        </Link> */}
      </ButtonWrapper>
    </SuccessModalWrapper>
  );
};
export default PublishModal;
