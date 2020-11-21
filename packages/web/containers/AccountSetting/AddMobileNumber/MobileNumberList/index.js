import React from 'react';
import Icon from 'react-icons-kit';
import { androidDelete } from 'react-icons-kit/ionicons/androidDelete';
import { openModal, closeModal } from '@redq/reuse-modal';
import ConfirmReportModal from '../../../ModalContainer/ConfirmReportModal';
import Box from 'reusecore/src/elements/Box';
import Button from 'reusecore/src/elements/Button';

export default ({ items, handleRemoveMobile }) => {
  const handleRemove = item => {
    handleRemoveMobile(item);
  };

  return (
    <>
      {items.map((item, index) => (
        <Box
          flexBox
          key={index}
          justifyContent="space-between"
          alignItems="center"
          style={{
            padding: '10px 15px',
            backgroundColor: '#f1f1f1',
            marginBottom: 40,
          }}
        >
          <p color="#8c8c8c" style={{ margin: 0 }}>
            {item.number}
          </p>
          <Button
            icon={<Icon icon={androidDelete} size={21} />}
            variant="textButton"
            color="#8C8C8C"
            style={{
              minWidth: 30,
              minHeight: 30,
            }}
            onClick={() =>
              openModal({
                config: {
                  width: 'auto',
                  height: 'auto',
                  transition: {
                    tension: 150,
                  },
                },
                springStyle: {
                  backgroundColor: '#ffffff',
                  padding: 0,
                },
                closeOnClickOutside: true,
                component: ConfirmReportModal,
                componentProps: {
                  data: {
                    handleRemoveMobile,
                    item,
                    closeModal,
                  },
                },
              })
            }
          />
        </Box>
      ))}
    </>
  );
};
