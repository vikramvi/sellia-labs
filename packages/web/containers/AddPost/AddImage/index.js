import React, { useContext, Fragment } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { Col } from "react-styled-flexboxgrid";
import Icon from "react-icons-kit";
import {
  checkmarkCircled,
  closeCircled,
  androidClose,
} from "react-icons-kit/ionicons";
import UpIcon from "core/static/images/UploadIcon.png";
import Heading from "reusecore/src/elements/Heading";

import { AddPostContext } from "../../../contexts/AddPostContext";

import Box from "reusecore/src/elements/Box";
import Image from "reusecore/src/elements/Image";

const UpButton = styled("button")`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px dashed #dfdfdf;
  border-radius: 3px;
  outline: 0;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const DeleteBtn = styled("button")`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfdfdf;
  font-size: 12px;
  border: 0;
  border-radius: 50%;
  outline: 0;
  position: absolute;
  top: -9px;
  left: -9px;
`;

const ThumbWrapper = styled("div")`
  height: 295px;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px;
  margin-left: -10px;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default () => {
  const { state, dispatch } = useContext(AddPostContext);
  const { adPost } = state;

  const onPreviewDrop = (selectedImages) => {
    selectedImages.map((image) => {
      image.preview = URL.createObjectURL(image);
    });

    dispatch({
      type: "UPDATE_ADPOST",
      payload: {
        key: "localGallery",
        value: adPost.localGallery.concat(selectedImages),
      },
    });
  };

  const handleRemoveImage = (item) => {
    const gallery = adPost.gallery;
    const localGallery = adPost.localGallery;

    const index = gallery.findIndex((image) => {
      return item.url === image.url;
    });
    if (index !== -1) {
      gallery.splice(index, 1);
    }

    const localImageIndex = localGallery.findIndex((image) => {
      return item.preview === image.preview;
    });

    if (localImageIndex !== -1) {
      localGallery.splice(localImageIndex, 1);
    }

    if (item.url) {
      if (item.url === adPost.preImage.url) {
        dispatch({
          type: "UPDATE_ADPOST",
          payload: { key: "image", value: gallery[0] },
        });
      }
      dispatch({
        type: "UPDATE_ADPOST",
        payload: { key: "gallery", value: gallery },
      });
    }
    if (item.preview) {
      if (item.preview === adPost.localImage.preview) {
        dispatch({
          type: "UPDATE_ADPOST",
          payload: { key: "localImage", value: localGallery[0] },
        });
      }
      dispatch({
        type: "UPDATE_ADPOST",
        payload: { key: "localGallery", value: localGallery },
      });
    }
  };

  let headerImgUri = "";

  if (adPost.localImage && adPost.localImage.preview) {
    headerImgUri = adPost.localImage.preview;
  }
  if (adPost.image && adPost.image.largeUrl) {
    headerImgUri = adPost.image.largeUrl;
  }
  let gallery = [];
  let localGalleryImage = [];

  if (adPost.localGallery && adPost.localGallery.length) {
    localGalleryImage = adPost.localGallery;
  }

  if (adPost.gallery && adPost.gallery.length) {
    gallery = adPost.gallery;
  }
  const combinedGallery = gallery.concat(localGalleryImage);

  const singleSliderImage = (image, index) => {
    return (
      <Box
        key={index}
        mb={15}
        width="75px"
        style={{
          position: "relative",
        }}
      >
        {combinedGallery.length > 1 &&
        headerImgUri !== image.largeUrl &&
        headerImgUri !== image.preview ? (
          <DeleteBtn onClick={() => handleRemoveImage(image)}>
            <Icon
              icon={androidClose}
              size={12}
              style={{
                color: "#333333",
              }}
            />
          </DeleteBtn>
        ) : null}
        <Box
          key={index}
          width="75px"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #dfdfdf",
          }}
          onClick={() => {
            if (image.preview) {
              dispatch({
                type: "UPDATE_ADPOST",
                payload: { key: "localImage", value: image },
              });
              dispatch({
                type: "UPDATE_ADPOST",
                payload: { key: "image", value: {} },
              });
            }
            if (image.url) {
              dispatch({
                type: "UPDATE_ADPOST",
                payload: { key: "image", value: image },
              });
            }
          }}
        >
          {image.preview === headerImgUri ? (
            <Icon
              icon={checkmarkCircled}
              size={18}
              style={{
                position: "absolute",
                top: -9,
                right: -9,
                zIndex: 1,
                color: "#30C56D",
              }}
            />
          ) : null}
          {image.largeUrl === headerImgUri ? (
            <Icon
              icon={checkmarkCircled}
              size={20}
              style={{
                position: "absolute",
                top: -15,
                right: -10,
                zIndex: 1,
                color: "#30C56D",
              }}
            />
          ) : null}
          <Image
            src={image.preview ? image.preview : image.largeUrl}
            alt={image.preview ? image.preview : image.largeUrl}
            height="57px"
          />
        </Box>
      </Box>
    );
  };

  return (
    <Box
      pr={20}
      mb={50}
      flexBox
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      {/* Featured Image Banner */}

      <Box mr={30} flexBox flexDirection="column" style={{ flexShrink: 0 }}>
        <Dropzone onDrop={onPreviewDrop}>
          {({ getRootProps, getInputProps }) => {
            return (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <UpButton>
                  <Image src={UpIcon} alt={"upload icon"} width={40} />
                  <Heading
                    as="h5"
                    mb={2}
                    mt={2}
                    content="Choose from Gallery"
                    style={{ fontSize: 12, fontWeight: 400, color: "#333333" }}
                  />
                </UpButton>
              </div>
            );
          }}
        </Dropzone>
        <ThumbWrapper>
          {combinedGallery.length
            ? combinedGallery.map(singleSliderImage)
            : null}
        </ThumbWrapper>
      </Box>

      <Box
        style={{
          border: "1px solid #e2e2e2",
          width: "100%",
          height: 400,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src={headerImgUri}
          alt={headerImgUri}
          height="100%"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};
