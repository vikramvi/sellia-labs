import { useContext, useEffect, useState } from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { useRouter } from "next/router";
import { Modal } from "@redq/reuse-modal";
import { GET_POST_FOR_EDIT } from "core/graphql/Post.query";
import Alert from "reusecore/src/elements/Alert";
import SecretPage from "../../hoc/secretPage";
import withLayout from "../../hoc/withLayout";
import {
  adPostSteps,
  STEPS,
  AddPostContext,
  AddPostProvider,
} from "../../contexts/AddPostContext";
import PageMeta from "../../components/PageMeta";
import SegmentCard from "../../components/SegmentCard";
import { PostLoader } from "../../components/Placeholder";
import "./style.css";

import PickImages from "../../containers/AddPost/PickImages";
import TitleInfo from "../../containers/AddPostModal/TitleInfo";
import RowContainer from "../../containers/AddPost/RowContainer";

import CategoryAndDetailInfo from "../../containers/AddPost/CategoryAndDetailInfo";
import LocationInfo from "../../containers/AddPost/LocationInfo";
import ContactNumberInfo from "../../containers/AddPost/ContactNumberInfo";
import TopToolBar from "../../containers/AddPostModal/TopToolBar";

import TextDescription from "../../containers/AddPostModal/TextDescription";
import RadioListSection from "../../containers/AddPost/RadioListSection";

import Router from "next/router";
import AsyncSelect from "react-select/async";
import Heading from "reusecore/src/elements/Heading";
import Progress from "../../components/Progress";
import { withApollo } from "../../helpers/apollo";
import Box from "reusecore/src/elements/Box";
import Button from "reusecore/src/elements/Button";
import Icon from "react-icons-kit";
import { db } from "../../helpers/init";
import AuthHelper from "../../helpers/authHelper";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "core/graphql/Mutations";
import ListGrid from "reusecore/src/elements/ListGrid";
import Text from "reusecore/src/elements/Text";
import AdImagesInfo from "../../containers/AddPostModal/AddImage";
import { uploadMultipleImages } from "../../helpers/uploadMultipleImage";

const colourStyles = {
  control: () => ({
    display: "flex",
    backgroundColor: "transparent",
    color: "#8c8c8c",
    border: "0",
    borderBottom: "1px solid #e2e2e2",
    width: "170px",
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
let imagesUrl = [];
const AddPost = ({ isLoggedIn, userId, email, closeModal, ...props }) => {
  console.log("close modal", props);
  let counter = 0;
  const { state, dispatch } = useContext(AddPostContext);
  const { step, adPost } = state;

  const [postSegments, setPostSegments] = useState([]);

  const [isSegmentListOpen, setSegmentListOpen] = useState(true);

  const [isValidated, setIsValidated] = useState(false);
  const [publishBtnLoading, setPublishBtnLoading] = useState(false);

  const [postMutation] = useMutation(ADD_POST);

  console.log("adpost values", adPost);
  // const {
  //   query: { id },
  // } = useRouter();
  const id = "new";

  const handleClick = (selectedCategories) => () => {
    dispatch({
      type: "UPDATE_ADPOST",
      payload: {
        key: "categories",
        value: selectedCategories,
      },
    });

    setSegmentListOpen(false);
  };

  const renderRecentPost = (selectedCategories) => {
    const { value, label } = selectedCategories;
    return (
      <SegmentCard
        className="nav-menu-item-link"
        titleStyle={{ fontSize: "18px", mt: "5px" }}
        onClick={handleClick(selectedCategories)}
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-start",
        }}
        title={label}
      />
    );
  };

  const validateForm = () => {
    if (
      adPost.brand &&
      Object.keys(adPost.categories).length &&
      adPost.price &&
      adPost.originalPrice &&
      adPost.condition &&
      adPost.belongsTo != ""
    ) {
      return true;
    }
    return false;
  };
  const fetchPostSegments = async () => {
    //read from firestore
    const doc = await db.collection("post_segments").orderBy("rank", "asc");

    const observer = doc.onSnapshot((docSnapshot) => {
      let arrCategories = [];
      docSnapshot.forEach(
        (doc) => {
          const dataSource = doc.data();
          arrCategories.push(dataSource);
        },
        (err) => {
          console.log(`Encountered error: ${err}`);
        }
      );

      // arrCategories.forEach((item) => {
      //   let categoryOptions = { ...item, value: item.title, label: item.title };
      //   options.push(categoryOptions);
      // });

      setPostSegments(arrCategories);
    });
  };

  if (id != "new") {
    const { data, loading, error } = useQuery(GET_POST_FOR_EDIT, {
      variables: { id },
    });

    useEffect(() => {
      if (!loading && Object.keys(data).length) {
        console.log("edit post fetch useEffect ->", counter);
        if (counter < 1) {
          dispatch({
            type: "UPDATE_STEP",
            payload: { step: 1 },
          });
          if (id) {
            dispatch({
              type: "UPDATE_FULL_ADPOST",
              payload: { id: id },
            });
          }
          let location = null;
          if (data.post.formattedLocation && data.post.formattedLocation.lat) {
            location = {
              lat:
                data.post.formattedLocation && data.post.formattedLocation.lat,
              lng:
                data.post.formattedLocation && data.post.formattedLocation.lng,
              formattedAddress:
                data.post.formattedLocation &&
                data.post.formattedLocation.formattedAddress
                  ? data.post.formattedLocation.formattedAddress
                  : "",
            };
          }

          dispatch({
            type: "UPDATE_FULL_ADPOST",
            payload: {
              title: data.post.title,
              condition: data.post.condition,
              price: data.post.price,
              image: data.post.image,
              gallery: data.post.gallery,
              isNegotiable: data.post.isNegotiable,
              authorId: props.data.userId,
              content: data.post.content,
              status: data.post.status,
              slug: data.post.slug,
              location,
              categories: data.post.categories,
              contactNumber: data.post.contactNumber,
            },
          });
          counter++;
        }
      }
      return () => {
        null;
      };
    }, [data]);

    // Error Rendering.
    if (error) return <Alert>{`Error! ${error.message}`}</Alert>;
  } else {
    useEffect(() => {
      fetchPostSegments();
    }, []);
  }

  let options = [];
  if (postSegments.length) {
    postSegments.forEach((item) => {
      let categoryOptions = { ...item, value: item.title, label: item.title };
      options.push(categoryOptions);
    });
  }

  //listen to image upload success
  const {
    preImage,
    preGallery,
    localImage,
    localGallery,
    location,
    ...prossedAdPostData
  } = adPost;
  let finalData = prossedAdPostData;

  console.log("prossedAdPostData ->", prossedAdPostData);

  useEffect(() => {
    (async function() {
      if (imagesUrl.length) {
        try {
          console.log("on submit ->", finalData);

          const reqData = {
            image: adPost.image,
            brand: adPost.brand,
            authorId: props.data.userId,
            gallery: adPost.gallery,
            title: adPost.title ?? "",
            slug: "test",
            price: adPost.price,
            belongsTo: adPost.belongsTo,
            originalPrice: adPost.originalPrice,
            isNegotiable: true,
            condition: adPost.condition,
            categories: [
              {
                id: "fKJqetAGRZElL8ct0gJT",
                slug: "car",
                name: "Car",
                value: "fKJqetAGRZElL8ct0gJT",
                label: "Car",
              },
            ],
            content: adPost.content,
            contactNumber: "",
            status: "publish",
            location: {
              lat: 38.9586307,
              lng: -77.35700279999999,
              formattedAddress: "Reston, VA, USA",
            },
          };

          const data = await postMutation({
            variables: {
              post: { ...reqData, status: "publish" },
            },
          });
          setPublishBtnLoading(false);
          if (!adPost.id) {
            dispatch({
              type: "UPDATE_ADPOST",
              payload: { key: "id", value: data.data.addPost.id },
            });
          }
          props.data.closeModal();
        } catch (error) {
          setPublishBtnLoading(false);
        }
      }
    })();
  }, [prossedAdPostData.gallery]);

  const loadOptions = async (fetchMore, inputValue, callback, loading) => {
    console.log("input value", inputValue);
    const filteredData = options.filter((item) =>
      item.slug.includes(inputValue)
    );
    callback(filteredData);
  };
  const submitPost = async () => {
    if (validateForm()) {
      //add post to firestore
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
          //reqdata

          const reqData = {
            image: {},
            brand: adPost.brand,
            authorId: props.data.userId,
            gallery: [],
            title: "test",
            slug: "test",
            price: adPost.price,
            belongsTo: adPost.belongsTo,
            originalPrice: adPost.originalPrice,
            isNegotiable: true,
            condition: adPost.condition,
            categories: [
              {
                id: "fKJqetAGRZElL8ct0gJT",
                slug: "car",
                name: "Car",
                value: "fKJqetAGRZElL8ct0gJT",
                label: "Car",
              },
            ],
            content: adPost.content,
            contactNumber: "",
            status: "draft",
            location: {
              lat: 38.9586307,
              lng: -77.35700279999999,
              formattedAddress: "Reston, VA, USA",
            },
          };

          console.log("reqData ->", JSON.stringify(reqData, null, 2));

          const data = await postMutation({
            variables: {
              post: { ...reqData, status: "publish" },
            },
          });
          setPublishBtnLoading(false);
          if (!adPost.id) {
            dispatch({
              type: "UPDATE_ADPOST",
              payload: { key: "id", value: data.data.addPost.id },
            });
          }

          props.data.closeModal();
        } catch (error) {
          console.log(error, "error");
          setPublishBtnLoading(false);
        }
      }
    }
  };

  return (
    <>
      <Grid
        flexBox
        style={{
          paddingTop: "10px",
          width: "100%",
        }}
      >
        {console.log("postSegments ->", JSON.stringify(postSegments, null, 2))}

        {console.log("options -> \n", options)}

        {postSegments.forEach((post) => {
          console.log(post.title, "\n");
        })}
        {console.log("\n\n\n")}
        {postSegments.forEach((post) => {
          if (post.sections && post.sections.length > 0) {
            post.sections.forEach((section) => {
              console.log(section.title);
            });
          }
        })}
        {console.log("\n\n\n")}
        <TopToolBar
          onClose={() => {
            props.data.closeModal();
          }}
        />
        <Row>
          <Box>
            {state.adPost.categories.sections && (
              <Box flexBox flexDirection="row" alignItems="center">
                {/* <Text
                  content="I am looking"
                  pr={10}
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#595959",
                  }}
                /> */}
                <Text
                  onClick={() => setSegmentListOpen(true)}
                  content={state.adPost.categories.title}
                  textAlign="center"
                  className="segment-menu-item-link"
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#333333",
                    lineHeight: "20px",
                  }}
                ></Text>
              </Box>
            )}

            {isSegmentListOpen && (
              <ListGrid
                data={options}
                columnWidth={[1]}
                limit={10}
                component={renderRecentPost}
                placeholder={<PostLoader />}
              />
            )}
          </Box>
        </Row>
        {!isSegmentListOpen && (
          <Row>
            {/* <Col xs={12}> */}
            <Col xs={12} sm={12} md={12}>
              {state.adPost.categories.sections &&
                state.adPost.categories.sections.length > 0 &&
                state.adPost.categories.sections.map((section, index) => {
                  console.log("section ->", section);
                  switch (section.type) {
                    case "radioSelectionList":
                      return <RadioListSection section={section} />;

                    //TODO change component
                    case "textField":
                      return <TitleInfo section={section} />;

                    //TODO change component
                    case "textBox":
                      return <TitleInfo section={section} />;

                    case "textDescription":
                      return <TextDescription section={section} />;

                    case "rowContainer":
                      return <RowContainer list={section.list} />;
                  }
                })}
            </Col>
          </Row>
        )}

        <Box
          flexBox
          alignItems="center"
          justifyContent="space-between"
          mt={20}
          flexDirection="row"
        >
          {!isSegmentListOpen &&
            state.adPost.categories &&
            state.adPost.categories.feature.add_photo && <AdImagesInfo />}
          {!isSegmentListOpen && (
            <Button
              title="Post"
              onClick={submitPost}
              isLoading={publishBtnLoading}
              style={{
                backgroundColor: !validateForm() ? "#e2e2e2" : "#30C56D",
              }}
            />
          )}
        </Box>
      </Grid>
    </>
  );
};

function AdPostPage(props) {
  console.log("props", props);
  return (
    <>
      <AddPostProvider>
        <AddPost {...props} />
        <Modal />
      </AddPostProvider>
    </>
  );
}

// export default withApollo(SecretPage(withLayout(AdPostPage)));

export default withApollo(AdPostPage);
