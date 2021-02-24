import Button from "reusecore/src/elements/Button";
import AddPostModal from "../../../containers/ModalContainer/AddPostModal";

import NotAuthorizeModal from "../NotAuthorizeModal";

import { IoMdAdd } from "react-icons/io";
import isAuthorized from "../../../hoc/isAuthorized";
import { openModal, closeModal } from "@redq/reuse-modal";

const AddPostButton = (props) => {
  console.log("AddPostButton -", props);
  const { isVerified, userId } = props;

  const handleAddPost = async () => {
    openModal({
      overlayClassName: "customeOverlayClass",
      closeOnClickOutside: false,
      closeComponent: () => <></>,
      componentProps: {
        data: {
          closeModal,
          userId,
        },
      },
      config: {
        className: "addPostNewModal",
        height: "auto",
        width: "50%",
        transition: {
          tension: 150,
        },
      },
      component: AddPostModal,
    });
  };
  return (
    <Button
      onClick={() => (isVerified ? handleAddPost() : NotAuthorizeModal())}
      icon={<IoMdAdd size={30} />}
      bg="transparent"
      color="#30C56D"
    />
  );
};

export default isAuthorized(AddPostButton);
