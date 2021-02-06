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
import { toCamelCase } from "../../../helpers/utility";
import Radio from "reusecore/src/elements/Radio";

let imagesUrl = [];
export default (props) => {
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

  const name = props.section.key;

  return (
    <>
      <Input
        elementType="input"
        elementConfig={{
          type: "number",
          required: "required",
        }}
        label={props.section.title}
        value={adPost[name]}
        changed={(price) =>
          dispatch({
            type: "UPDATE_ADPOST",
            payload: { key: name, value: parseFloat(price.target.value) },
          })
        }
        style={{ marginBottom: 20 }}
      />
      {props.section.mayFree && (
        <Radio
          style={{ width: "30%", margin: "1px" }}
          value={adPost[name]}
          name={name}
          labelText={"Free"}
          onChange={() => {
            dispatch({
              type: "UPDATE_ADPOST",
              payload: { key: name, value: parseFloat(0) },
            });
          }}
          checked={adPost[name] === 0}
        />
      )}
    </>
  );
};
