import React from 'react';
import Icon from 'react-icons-kit';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import Button from 'reusecore/src/elements/Button';
import Heading from 'reusecore/src/elements/Heading';
import Box from 'reusecore/src/elements/Box';

const TopToolBar = ({ onClose }) => (
  <>
    <Box flexBox justifyContent="space-between" alignItems="center" mb={10}>
      <Heading
        content="Edit Post Info"
        mb={0}
        style={{ fontSize: 24, fontWeight: 600, color: '#333333' }}
      />

      <Button
        icon={<Icon icon={androidClose} size={24} color="#595959" />}
        variant="textButton"
        onClick={onClose}
        style={{
          color: '#595959',
        }}
      />
    </Box>
  </>
);

export default TopToolBar;
