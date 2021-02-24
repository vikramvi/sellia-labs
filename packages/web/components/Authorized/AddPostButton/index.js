import Button from "reusecore/src/elements/Button";
import AddPostModal from "../../../containers/ModalContainer/AddPostModal";
import { IoMdAdd } from "react-icons/io";
import isAuthorized from "../../../hoc/isAuthorized";
import { openModal, closeModal } from "@redq/reuse-modal";

const AddPostButton = (props) => {
  const { isVerified, userId } = props;

  const handleAddPost = async () => {
    if (isVerified) {
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
    } else {
      //ask for email verification
      alert("Please verify your primary email");
    }
  };
  return (
    <Button
      onClick={() => (isVerified ? handleAddPost() : handleNotAuthorize())}
      icon={<IoMdAdd size={30} />}
      bg="transparent"
      color="#30C56D"
    />
  );
};

export default isAuthorized(AddPostButton);
