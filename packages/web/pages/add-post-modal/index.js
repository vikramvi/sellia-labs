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
import PickImages from "../../containers/AddPost/PickImages";
import TitleAndPriceInfo from "../../containers/AddPost/TitleAndPriceInfo";
import RowContainer from "../../containers/AddPost/RowContainer";

import CategoryAndDetailInfo from "../../containers/AddPost/CategoryAndDetailInfo";
import LocationInfo from "../../containers/AddPost/LocationInfo";
import ContactNumberInfo from "../../containers/AddPost/ContactNumberInfo";
import TopToolBar from "../../containers/AddPost/TopToolBar";

import TextDescription from "../../containers/AddPost/TextDescription";
import RadioListSection from "../../containers/AddPost/RadioListSection";

import Router from "next/router";
import AsyncSelect from "react-select/async";
import { GET_CATEGORIES_FOR_DROPDOWN } from "core/graphql/Category.query";
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

const AddPost = ({ isLoggedIn, userId, email, closeModal, ...props }) => {
  console.log("close modal", props);
  let counter = 0;
  const { state, dispatch } = useContext(AddPostContext);
  const { step, adPost } = state;
  const [postSegments, setPostSegments] = useState([]);
  const [isValidated, setIsValidated] = useState(false);
  const [publishBtnLoading, setPublishBtnLoading] = useState(false);

  const [postMutation] = useMutation(ADD_POST);

  console.log("adpost values", adPost);
  // const {
  //   query: { id },
  // } = useRouter();
  const id = "new";

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
    const doc = await db.collection("post_segments");

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
              authorId: userId,
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
  const { data, error, loading, fetchMore } = useQuery(
    GET_CATEGORIES_FOR_DROPDOWN,
    {
      variables: {
        limit: 1000,
      },
    }
  );
  let options = [];
  if (!loading && data.categories.data.length) {
    postSegments.forEach((item) => {
      let categoryOptions = { ...item, value: item.title, label: item.title };
      options.push(categoryOptions);
    });
  }

  const loadOptions = async (fetchMore, inputValue, callback, loading) => {
    console.log("input value", inputValue);
    const filteredData = options.filter((item) =>
      item.slug.includes(inputValue)
    );
    callback(filteredData);
  };
  const submitPost = async () => {
    if (validateForm()) {
      // const reqData = {
      //   category: adPost.categories,
      //   condition: adPost.condition,
      //   belongsTo: adPost.belongsTo,
      //   content: adPost.content,
      // };

      const reqData = {
        image: {},
        brand: adPost.brand,
        authorId: "1YFGEa6esERO1DpMDKd40598e6m2",
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
        {postSegments && console.log("options data", options)}

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

        <Row>
          {/* <Box> */}
          <Col sm={10}>
            <Heading
              as="h1"
              content="Post a listing"
              textAlign="left"
              mb={10}
              style={{ fontSize: 24, fontWeight: 600, color: "#333333" }}
            />
          </Col>
          <Col sm={2}>
            <TopToolBar
              onClose={() => {
                props.data.closeModal();
              }}
            />
          </Col>

          {/* </Box> */}
        </Row>
        <Row>
          <Box>
            <Heading
              as="h1"
              content="I am looking ..."
              textAlign="left"
              mb={10}
              style={{ fontSize: 18, fontWeight: 600, color: "#333333" }}
            />
            <AsyncSelect
              isMulti={false}
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
          </Box>
        </Row>

        <Row>
          <Col xs={12} sm={8} md={8}>
            {console.log(
              "on selection ->",
              state.adPost.categories,
              state.adPost
            )}

            {state.adPost.categories.sections &&
              state.adPost.categories.sections.length > 0 &&
              state.adPost.categories.sections.map((section, index) => {
                console.log("section ->", section);
                switch (section.type) {
                  case "radioSelectionList":
                    return <RadioListSection section={section} />;

                  case "textDescription":
                    return <TextDescription section={section} />;

                  case "rowContainer":
                    return <RowContainer list={section.list} />;
                }
              })}
          </Col>
        </Row>
        <Row>
          <Box flexBox justifyContent="space-between" mt={20}>
            <Button
              title="Submit"
              // iconPosition="right"
              // disabled={adPost.location == null || btnLoading}
              onClick={() =>
                dispatch({
                  type: "UPDATE_STEP",
                  payload: { step: step + 1 },
                })
              }
              // icon={<Icon icon={chevronRight} size={21} color="#ffffff" />}
              onClick={submitPost}
              isLoading={publishBtnLoading}
              style={{
                backgroundColor: !validateForm() ? "#e2e2e2" : "#30C56D",
              }}
            />
          </Box>
        </Row>
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
