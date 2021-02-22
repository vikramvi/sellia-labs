import { openModal, closeModal } from "@redq/reuse-modal";
import GetVerifiedModal from "../../containers/ModalContainer/GetVerifiedModal";

const NotAuthorizeModal = () => {
  openModal({
    config: {
      disableDragging: false,
      width: "auto",
      height: "auto",
      enableResizing: false,
      disableDragging: true,
      transition: {
        tension: 150,
      },
    },
    withRnd: false,
    closeOnClickOutside: true,
    component: GetVerifiedModal,
    componentProps: {},
  });
};

export default NotAuthorizeModal;
