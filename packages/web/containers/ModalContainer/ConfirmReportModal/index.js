import React from 'react';
import Icon from 'react-icons-kit';
import { iosTrash } from 'react-icons-kit/ionicons/iosTrash';
import { ReportModalWrapper, ButtonWrapper, IconWrapper } from './style';
import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';

const ConfirmReportModal = ({
  data: { handleRemoveMobile, item, closeModal },
}) => {
  const removeMobile = () => {
    handleRemoveMobile(item);
    closeModal();
  };
  return (
    <ReportModalWrapper>
      <IconWrapper>
        <Icon icon={iosTrash} size={32} />
      </IconWrapper>

      <Text
        content="Confirm Delete?"
        as="span"
        fontSize={21}
        fontWeight={700}
        color="#333333"
        mb={10}
      />

      <Text
        content={`You can't resote your account, it will permanently deleted`}
        as="span"
        fontSize={16}
        fontWeight={400}
        color="#8C8C8C"
        style={{ textAlign: 'center' }}
      />
      <ButtonWrapper>
        <Button
          title="Cancel"
          mr={20}
          onClick={closeModal}
          style={{
            width: '100%',
            backgroundColor: '#E2E2E2',
            color: '#595959',
            fontWeight: 600,
          }}
        />
        <Button
          title="Delete"
          onClick={removeMobile}
          style={{
            width: '100%',
            backgroundColor: '#EF5A5A',
            color: '#FFFFFF',
            fontWeight: 600,
          }}
        />
      </ButtonWrapper>
    </ReportModalWrapper>
  );
};
export default ConfirmReportModal;
