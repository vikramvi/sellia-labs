import React, { useState, useContext, useEffect } from "react";
import Icon from "react-icons-kit";
import { archive } from "react-icons-kit/ionicons/archive";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";
import { uploadMultipleImages } from "../../../helpers/uploadMultipleImage";
import Box from "reusecore/src/elements/Box";
import Button from "reusecore/src/elements/Button";
import { chevronLeft } from "react-icons-kit/ionicons/chevronLeft";
import Text from "reusecore/src/elements/Text";
import Input from "../../../components/Input";
import { ADD_POST } from "core/graphql/Mutations";
import AsyncSelect from "react-select/async";
import { AddPostContext } from "../../../contexts/AddPostContext";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AuthHelper from "../../../helpers/authHelper";
import { GET_CATEGORIES_FOR_DROPDOWN } from "core/graphql/Category.query";
import PublishModal from "../../ModalContainer/PostPublishModal";
import { openModal, closeModal } from "@redq/reuse-modal";
import Radio from "reusecore/src/elements/Radio";
import { toCamelCase } from "../../../helpers/utility";

const colourStyles = {
  control: () => ({
    display: "flex",
    backgroundColor: "transparent",
    color: "#8c8c8c",
    border: "0",
    borderBottom: "1px solid #e2e2e2",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0",
  }),
  placeholder: () => ({
    color: "#8c8c8c",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  input: () => ({
    color: "#8c8c8c",
  }),
  dropdownIndicator: () => ({
    padding: "8px 0",
  }),
};

const publishModal = (newPost) => {
  if (
    newPost &&
    newPost.data &&
    newPost.data.addPost &&
    newPost.data.addPost.status === "publish"
  ) {
    openModal({
      config: {
        disableDragging: false,
        size: {
          width: 360,
          height: 320,
        },
        enableResizing: {
          bottom: true,
          bottomLeft: true,
          bottomRight: true,
          left: true,
          right: true,
          top: true,
          topLeft: true,
          topRight: true,
        },
      },
      closeOnClickOutside: true,
      component: PublishModal,
      componentProps: {
        data: {
          closeModal,
          title: "Congrats!!!",
          message: "Your account information saved successfully",
          slug: newPost.data.addPost.slug,
        },
      },
    });
  }
};

let imagesUrl = [];
const SelctionListSection = (props) => {
  const { state, dispatch } = useContext(AddPostContext);
  const [btnLoading, setBtnLoading] = useState(false);
  const [publishBtnLoading, setPublishBtnLoading] = useState(false);

  const [postMutation] = useMutation(ADD_POST);
  const { data, error, loading, fetchMore } = useQuery(
    GET_CATEGORIES_FOR_DROPDOWN,
    {
      variables: {
        limit: 1000,
      },
    }
  );
  const { step, adPost } = state;
  let options = [];
  if (!loading && data.categories.data.length) {
    data.categories.data.map((item, index) => {
      let categoryOptions = { ...item, value: item.id, label: item.name };
      options.push(categoryOptions);
    });
  }

  const handlePostSubmit = async () => {
    await AuthHelper.refreshToken();
    setPublishBtnLoading(true);
    dispatch({
      type: "UPDATE_ADPOST",
      payload: { key: "status", value: "publish" },
    });
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
            post: { ...finalData, status: "publish" },
          },
        });
        setPublishBtnLoading(false);
        if (!adPost.id) {
          dispatch({
            type: "UPDATE_ADPOST",
            payload: { key: "id", value: data.data.addPost.id },
          });
        }
        publishModal(data);
      } catch (error) {
        console.log(error, "error");
        setPublishBtnLoading(false);
      }
    }
  };

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
              post: { ...finalData, status: "publish" },
            },
          });
          setPublishBtnLoading(false);
          setBtnLoading(false);
          if (!adPost.id) {
            dispatch({
              type: "UPDATE_ADPOST",
              payload: { key: "id", value: data.data.addPost.id },
            });
          }
          publishModal(data);
        } catch (error) {
          setPublishBtnLoading(false);
          setBtnLoading(false);
        }
      }
    })();
  }, [prossedAdPostData.gallery]);

  // useEffect(() => {
  //   (async function() {
  //     if (imagesUrl.length) {
  //       try {
  //         const data = await postMutation({
  //           variables: {
  //             post: finalData,
  //           },
  //         });
  //         setBtnLoading(false);
  //         if (!adPost.id) {
  //           dispatch({
  //             type: "UPDATE_ADPOST",
  //             payload: { key: "id", value: data.data.addPost.id },
  //           });
  //         }
  //       } catch (error) {
  //         setBtnLoading(false);
  //       }
  //     }
  //   })();
  // }, [prossedAdPostData.gallery]);

  const loadOptions = async (fetchMore, inputValue, callback, loading) => {
    const filteredData = options.filter((item) =>
      item.slug.includes(inputValue)
    );
    callback(filteredData);
  };

  const name = toCamelCase(props.section.key);

  return (
    <>
      <Box flexBox flexDirection="column" mb={40}>
        <Text
          content={props.section.title}
          pb={10}
          pt={10}
          style={{ fontSize: 16, fontWeight: 400, color: "#595959" }}
        />
        {props.section.list.map((section, key) => {
          return (
            <div>
              <Radio
                id={key}
                value={adPost[name]}
                name={name}
                labelText={section.text}
                onChange={() => {
                  dispatch({
                    type: "UPDATE_ADPOST",
                    payload: { key: props.section.key, value: section.text },
                  });
                }}
                checked={adPost[name] === section.text}
              />
            </div>
          );
        })}
      </Box>
    </>
  );
  /*return (
    <>
      <Box flexBox flexDirection="column" justifyContent="space-between">
        <Text
          content="Select the preferred categories"
          pb={20}
          style={{ fontSize: 16, fontWeight: 400, color: "#595959" }}
        />
        <AsyncSelect
          isMulti={true}
          defaultValue={adPost.categories ? adPost.categories : []}
          defaultOptions={options}
          styles={colourStyles}
          loadOptions={(inputValue, callback) =>
            loadOptions(fetchMore, inputValue, callback, loading)
          }
          onChange={(selectedCategories) => {
            dispatch({
              type: "UPDATE_ADPOST",
              payload: {
                key: "categories",
                value: selectedCategories,
              },
            });
          }}
        />
        <Input
          elementType="textarea"
          rows={4}
          elementConfig={{
            type: "text",
            required: "required",
          }}
          label="Details"
          changed={(details) =>
            dispatch({
              type: "UPDATE_ADPOST",
              payload: { key: "content", value: details.target.value },
            })
          }
          value={adPost.content}
          style={{
            marginTop: 40,
          }}
        />

        <Box flexBox justifyContent="space-between" mb={40}>
          <Button
            title="Save"
            iconPosition="left"
            icon={<Icon icon={archive} size={18} color="#8C8C8C" />}
            onClick={handleDraftingPost}
            variant="textButton"
            isLoading={btnLoading}
          />
          <Button
            title="Previous"
            iconPosition="left"
            onClick={() =>
              dispatch({
                type: "UPDATE_STEP",
                payload: { step: step - 1 },
              })
            }
            disabled={btnLoading}
            icon={<Icon icon={chevronLeft} size={14} color="#8C8C8C" />}
            variant="textButton"
            mr={30}
            ml="auto"
          />
        </Box>
        <Button
          title="Done"
          iconPosition="right"
          isLoading={publishBtnLoading}
          loaderColor="#ffffff"
          disabled={
            (adPost.categories && adPost.categories.length === 0) || btnLoading
          }
          onClick={handlePostSubmit}
          style={{
            backgroundColor:
              adPost.categories.length === 0 || btnLoading
                ? "#e2e2e2"
                : "#30C56D",
          }}
        />
      </Box>
    </>
  );*/
};

export default SelctionListSection;
