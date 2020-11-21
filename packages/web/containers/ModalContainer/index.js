import React from 'react';
/** Main Modal Component */
import Modal from 'core/components/Web/UI/Modal';

/** Modal Components */

import ShareModal from './ShareModal';

/** Modal Type Constants */
import modalActions from '../../redux/Modal/actions';

const MODAL_COMPONENTS = {
  SHARE_MODAL: ShareModal,
};

const ModalContainer = props => {
  if (!props.modalType) {
    return null;
  }
  const SpecificModalContent = MODAL_COMPONENTS[props.modalType];
  return (
    <Modal
      show={props.isVisible}
      closed={props.closeModal}
      content={
        <SpecificModalContent onClose={props.closeModal} data={props.data} />
      }
    />
  );
};

export default ModalContainer;
