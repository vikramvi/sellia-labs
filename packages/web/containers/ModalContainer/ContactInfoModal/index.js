import React from 'react';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';

const ContactInfoModal = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        flexBox
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingTop: 30,
          paddingBottom: 20,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <Text
          content="Contact Info"
          as="h3"
          fontSize={20}
          fontWeight={600}
          color="#333333"
          mb={10}
        />

        <Text
          content={props.data.contactNumber}
          as="span"
          fontSize={14}
          fontWeight={400}
          color="#595959"
          mb={4}
        />
      </Box>

      <Box
        flexBox
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: '#F8F8F8',
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <Text
          content="Reporting a safety issue"
          as="span"
          fontSize={16}
          fontWeight={700}
          color="#333333"
          mb={10}
        />

        <Text
          content="if you feel that you have been the victim of a spam, please report
          your situation to us immediately."
          as="span"
          fontSize={14}
          fontWeight={400}
          color="#595959"
          mb={3}
        />
      </Box>
    </div>
  );
};

export default ContactInfoModal;
