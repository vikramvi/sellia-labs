import React, { useContext, useEffect, useState } from "react";
import getSlug from "speakingurl";
import { uploadMultipleImages } from "../../../helpers/uploadMultipleImage";
import Icon from "react-icons-kit";
import { archive } from "react-icons-kit/ionicons/archive";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";
import Switch from "reusecore/src/elements/Switch";
import Button from "reusecore/src/elements/Button";
import Text from "reusecore/src/elements/Text";
import Box from "reusecore/src/elements/Box";
import Input from "../../../components/Input";
import AuthHelper from "../../../helpers/authHelper";
import { ADD_POST } from "core/graphql/Mutations";
import { useMutation } from "@apollo/react-hooks";
import { AddPostContext } from "../../../contexts/AddPostContext";

let imagesUrl = [];
export default ({ section }) => {
  const { state, dispatch } = useContext(AddPostContext);
  const { step, adPost } = state;

  const [errors, setError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [postMutation] = useMutation(ADD_POST);
  const handleDraftingPost = async () => {
    await AuthHelper.refreshToken();
    setBtnLoading(true);
    if (adPost.localGallery.length) {
      imagesUrl = await uploadMultipleImages(adPost.localGallery);
      if (imagesUrl && imagesUrl.length > 0) {
        dispatch({
          type: "UPDATE_FULL_ADPOST",
          payload: {
            gallery: adPost.gallery.concat(imagesUrl[0]),
            image: !adPost.image.url ? imagesUrl[0][0] : adPost.image,
            localImage: {},
            localGallery: [],
          },
        });
      }
    } else {
      try {
        const data = await postMutation({
          variables: {
            post: finalData,
          },
        });
        setBtnLoading(false);
        if (!adPost.id) {
          dispatch({
            type: "UPDATE_ADPOST",
            payload: { key: "id", value: data.data.addPost.id },
          });
        }
      } catch (error) {
        setBtnLoading(false);
      }
    }
  };
  const {
    preImage,
    preGallery,
    localImage,
    localGallery,
    location,
    ...prossedAdPostData
  } = adPost;
  let finalData = prossedAdPostData;
  if (location && location.lat) {
    finalData = {
      ...prossedAdPostData,
      location,
    };
  }

  useEffect(() => {
    (async function() {
      if (imagesUrl.length) {
        try {
          const data = await postMutation({
            variables: {
              post: finalData,
            },
          });
          console.log(data, "data");
          setBtnLoading(false);
          if (!adPost.id) {
            dispatch({
              type: "UPDATE_ADPOST",
              payload: { key: "id", value: data.data.addPost.id },
            });
          }
        } catch (error) {
          setBtnLoading(false);
        }
      }
    })();
  }, [prossedAdPostData.gallery]);

  return (
    <>
      <Input
        elementType="input"
        value={adPost.title}
        elementConfig={{
          type: "text",
          required: "required",
        }}
        label={section.title ?? "Title"}
        changed={(title) => {
          dispatch({
            type: "UPDATE_ADPOST",
            payload: { key: "title", value: title.target.value },
          });
          // if (adPost.slug === '') {
          dispatch({
            type: "UPDATE_ADPOST",
            payload: { key: "slug", value: getSlug(title.target.value) },
          });
          // }
        }}
      />
    </>
  );
};
