import React from 'react';
import styled from 'styled-components';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import UpIcon from 'core/static/images/UploadIcon.png';
const Container = styled.div`
  border: none;
  width: 100%;
  height: 261px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  border-radius: 10px;
  cursor: pointer;
  outline: 0;
`;
export default function DropArea() {
  return (
    <Container>
      <Image src={UpIcon} alt={'upload icon'} width={82} height={50} mb={35} />

      <Heading
        as="h3"
        mb={10}
        content="Choose form Gallery"
        style={{ fontSize: 20, fontWeight: 600, color: '#333333' }}
      />

      <Text
        content="Maximum image size 1MB"
        style={{ fontSize: 16, fontWeight: 400, color: '#595959' }}
      />
    </Container>
  );
}
