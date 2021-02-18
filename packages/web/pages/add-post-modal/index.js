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
import SelctionListSection from "../../containers/AddPost/SelctionListSection";

import CategoryAndDetailInfo from "../../containers/AddPost/CategoryAndDetailInfo";
import LocationInfo from "../../containers/AddPostModal/LocationInfo";
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
import getSlug from "speakingurl";

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
  let counter = 0;
  const { state, dispatch } = useContext(AddPostContext);
  const { step, adPost } = state;

  const [postSegments, setPostSegments] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState();

  const [isSegmentListOpen, setSegmentListOpen] = useState(true);

  const [isValidated, setIsValidated] = useState(false);
  const [publishBtnLoading, setPublishBtnLoading] = useState(false);
  const [postData, setPostData] = useState({ ...props.data.postData });

  const [postMutation] = useMutation(ADD_POST);

  console.log("adpost values", adPost);
  console.log("Props postdata", props.data.postData);

  const id = "new";
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
  if (location && location.lat) {
    finalData = {
      ...prossedAdPostData,
      location,
    };
  }

  console.log("prossedAdPostData ->", prossedAdPostData);

  //effects
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.data.closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    fetchPostSegments();
  }, []);

  useEffect(() => {
    if (imagesUrl.length) {
      try {
        console.log("on submit ->", finalData);
        uploadPost();
      } catch (error) {
        setPublishBtnLoading(false);
      }
    }
  }, [prossedAdPostData.gallery]);

  //check for edit mode
  if (Object.keys(postData).length) {
    useEffect(() => {
      if (postData.categories[0]) {
        console.log(
          "postData.categories[0] -> useEffect",
          postData.categories[0]
        );

        dispatch({
          type: "UPDATE_FULL_ADPOST",
          payload: {
            categories: postData.categories.map((selectedCategories) => ({
              id: selectedCategories.id,
              label: selectedCategories.label,
              name: selectedCategories.name,
              slug: selectedCategories.slug,
              value: selectedCategories.value,
            })),
            brand: postData.brand || "",
            category: postData.category || "",
            city: postData.city || "",
            image: postData.image,
            authorId: postData.authorId,
            id: postData.id,
            gallery: postData.gallery,
            title: postData.title || "",
            price: postData.price,
            belongsTo: postData.belongsTo,
            originalPrice: postData.originalPrice || 0,
            isNegotiable: postData.isNegotiable,
            condition: postData.condition,
            content: postData.content || "",
            contactNumber: postData.contactNumber || "",
            status: postData.status || "",
            location: postData.location || {},

            mileage: postData.mileage || 0,
            miles: postData.miles || 0,
            slug: postData.slug,
          },
        });

        setSegmentListOpen(false);
      }
    }, [postData]);
  }

  //rendering
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

  //cloud layer
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

      setPostSegments(arrCategories);
    });
  };

  const submitPostServer = async () => {
    //read from firestore

    const finalData = {
      ...prossedAdPostData,
      status: "publish",
      authorId: props.data.userId,
      slug: getSlug(adPost.title) + "-" + Date.now(),
    };

    console.log("submitting ->", finalData);

    try {
      const post = await db
        .collection("posts")
        .add(finalData)
        .then((doc) => {
          // return this.byId({ id: doc.id });
        });
      return post;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //user interactions
  const handleClick = (selectedCategories) => () => {
    dispatch({
      type: "UPDATE_ADPOST",
      payload: {
        key: "categories",
        value: [
          {
            id: selectedCategories.id,
            label: selectedCategories.label,
            name: selectedCategories.label,
            slug: selectedCategories.slug,
            value: selectedCategories.value,
          },
        ],
      },
    });

    setSelectedSegment(selectedCategories);
    setSegmentListOpen(false);
  };

  //validations
  const validateForm = () => {
    //TODO: category specific validation
    return true;

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

  let options = [];
  if (postSegments.length) {
    let segments = postSegments;
    //filter
    if (selectedSegment) {
      segments = segments.filter((segment) => {
        return segment.id !== selectedSegment.id;
      });
    }

    segments.forEach((item) => {
      let categoryOptions = { ...item, value: item.title, label: item.title };
      options.push(categoryOptions);
      if (
        Object.keys(postData).length &&
        postData.categories[0].id === item.id &&
        !postData.categories[0].sections
      ) {
        setSelectedSegment(item);
        setPostData({
          ...postData,
          categories: [{ ...categoryOptions, ...postData.categories[0] }],
        });
      }
    });
  }

  const uploadPost = async () => {
    // submitPostServer();

    try {
      //reqdata
      console.log("adPost ->", JSON.stringify(adPost));

      const reqData = {
        isNegotiable: false,
        condition: adPost.condition,
        contactNumber: "",

        image: adPost.image,
        brand: adPost.brand,
        authorId: props.data.userId,
        gallery: adPost.gallery,
        title: adPost.title,
        slug: adPost.slug ? adPost.slug : getSlug(adPost.title),
        price: adPost.price,
        belongsTo: adPost.belongsTo,
        originalPrice: adPost.originalPrice,
        isNegotiable: true,
        categories: adPost.categories,
        content: adPost.content,
        contactNumber: "",
        location: {
          lat: 38.9586307,
          lng: -77.35700279999999,
          formattedAddress: "Reston, VA, USA",
        },
      };

      if (adPost.id) {
        reqData.id = adPost.id;
      }

      console.log("reqData ->", JSON.stringify(reqData));

      const data = await postMutation({
        variables: {
          post: {
            ...finalData,
            authorId: props.data.userId,
            slug: adPost.slug ? adPost.slug : getSlug(adPost.title),
            status: "publish",
          },
        },
      });
      setPublishBtnLoading(false);

      props.data.closeModal();
    } catch (error) {
      console.log(error, "error");
      setPublishBtnLoading(false);
    }
  };

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
        uploadPost();
      }
    }
  };

  return (
    <>
      <Grid
        flexBox
        style={{
          padding: "0px",
          width: "100%",
        }}
      >
        {console.log(
          "postSegments ->",
          JSON.stringify(postSegments[4], null, 2)
        )}

        <TopToolBar
          onClose={() => {
            props.data.closeModal();
          }}
        />
        <Row
          style={{
            margin: "20px",
          }}
        >
          <Box>
            {selectedSegment && selectedSegment.sections && (
              <Box flexBox flexDirection="row" alignItems="center">
                <Text
                  onClick={() => setSegmentListOpen(true)}
                  content={selectedSegment.title}
                  textAlign="center"
                  className="segment-menu-item-link"
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#333333",
                    backgroundColor: "#30C56D",
                    lineHeight: "20px",
                    marginRight: "40px",
                  }}
                ></Text>
                {selectedSegment.feature.belongs_to && (
                  <SelctionListSection
                    section={{
                      ...selectedSegment.belongsTo,
                      title: "",
                      type: "selectionList",
                    }}
                  />
                )}
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
          <Row
            style={{
              margin: "20px",
            }}
          >
            {/* <Col xs={12}> */}
            <Col xs={12} sm={12} md={12}>
              {selectedSegment &&
                selectedSegment.sections &&
                selectedSegment.sections.map((section, index) => {
                  switch (section.type) {
                    case "radioSelectionList":
                      return <RadioListSection section={section} />;

                    //TODO change component
                    case "textField":
                      return <TitleInfo section={section} />;

                    case "location":
                      return <LocationInfo section={section} />;

                    //TODO change component
                    case "textBox":
                      return <TitleInfo section={section} />;

                    case "textDescription":
                      return <TextDescription section={section} />;

                    case "rowContainer":
                      return <RowContainer list={section.list} />;

                    case "selectionList":
                      return <SelctionListSection section={section} />;
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
            selectedSegment &&
            selectedSegment.feature.add_photo && <AdImagesInfo />}
          {!isSegmentListOpen && (
            <Button
              title="Post"
              disabled={publishBtnLoading}
              onClick={submitPost}
              loaderColor="#fff"
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
