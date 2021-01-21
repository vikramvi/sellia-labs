import React from "react";
import AddPost from "../../../pages/add-post-modal";

const AddPostModal = (props) => {
  return (
    <div className="NoMargin">
      <AddPost {...props} />
    </div>
  );
};

export default AddPostModal;
