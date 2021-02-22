import isAuthorized from "../../../hoc/isAuthorized";
import styled from "styled-components";
import Button from "reusecore/src/elements/Button";
import Icon from "../../Icon";
import Router from "next/router";
import { CHAT_PAGE } from "core/navigation/constant";
import { openModal, closeModal } from "@redq/reuse-modal";
import ShareModal from "../../../containers/ModalContainer/ShareModal";
import NotAuthorizeModal from "../NotAuthorizeModal";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1023px) {
    width: 100%;
    margin-top: 20px;

    .outlineButton {
      width: calc(50% - 5px);
    }
  }
`;

const PostAction = (props) => {
  const { isVerified, item, userId } = props;

  const handleSendMessage = () => {
    Router.push(
      {
        pathname: CHAT_PAGE,
        query: { post: JSON.stringify(item) },
      },
      CHAT_PAGE
    );
  };

  const handleShare = () => {
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
      component: ShareModal,
      componentProps: {
        data: {
          author: item.author.name,
          link: process.browser
            ? window.location.host + `/?slug=${item.slug}`
            : null,
          title: item.title,
        },
      },
    });
  };

  return (
    <ButtonWrapper style={{ flexGrow: 0 }}>
      {item.status === "publish" && userId !== item.authorId && (
        <Button
          iconPosition="left"
          title="Send message"
          bg="#FFFFFF"
          style={{
            marginBottom: 2,
            width: "25%",
            fontSize: "12px",
            height: "30px",
            color: "#1e2d8f",
            marginRight: 2,
          }}
          icon={
            <Icon name="ios-chatboxes" fontSize={18} color="#1e2d8f" mr={10} />
          }
          onClick={() =>
            isVerified ? handleSendMessage() : NotAuthorizeModal()
          }
        />
      )}

      <Button
        iconPosition="left"
        bg="#FFFFFF"
        title="Share"
        icon={<Icon name="ios-share-alt" fontSize={18} color="#1e2d8f" />}
        style={{
          fontSize: "12px",

          marginBottom: 2,
          color: "#1e2d8f",
          width: "20%",

          height: "30px",
        }}
        onClick={() => (isVerified ? handleShare() : NotAuthorizeModal())}
      />
    </ButtonWrapper>
  );
};

export default isAuthorized(PostAction);
