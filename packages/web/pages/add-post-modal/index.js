import { useContext, useEffect, useState } from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
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
import CategoryAndDetailInfo from "../../containers/AddPost/CategoryAndDetailInfo";
import LocationInfo from "../../containers/AddPost/LocationInfo";
import ContactNumberInfo from "../../containers/AddPost/ContactNumberInfo";
import TopToolBar from "../../containers/AddPost/TopToolBar";
import RadioListSection from "../../containers/AddPost/RadioListSection";
import Router from "next/router";
import AsyncSelect from "react-select/async";
import { GET_CATEGORIES_FOR_DROPDOWN } from "core/graphql/Category.query";
import Heading from "reusecore/src/elements/Heading";
import Progress from "../../components/Progress";
import { withApollo } from "../../helpers/apollo";
import Box from "reusecore/src/elements/Box";
import { db } from "../../helpers/init";
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
const cateOptions = {
  car: {
    brand: [
      "Toyota",
      "Tesla",
      "Kia",
      "Honda",
      "Hyundai",
      "Porche",
      "Jeep",
      "Ford",
      "buick",
    ],
  },
  clothing: {
    brand: [
      "Raymond",
      "Puma",
      "GUCCI",
      "Nike",
      "Hermes",
      "Cartier",
      "Levis",
      "Adidas",
      "Burberry",
    ],
  },
  "motor-cycle": {
    brand: [],
  },
  property: {
    brand: [],
  },
};

const AddPost = ({ isLoggedIn, userId, email, closeModal, ...props }) => {
  console.log("close modal", props);
  let counter = 0;
  const { state, dispatch, selectedCategories } = useContext(AddPostContext);
  console.log("selectedCategories", useContext(AddPostContext));
  const { step, adPost } = state;
  const [postSegments, setPostSegments] = useState([]);
  // const {
  //   query: { id },
  // } = useRouter();
  const id = "new";

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
  console.log("inside effect", state.adPost.categories);
  // useEffect(()=>{
  //   switch (state.adPost.categories.slug) {
  //     case "clothing": {
  //       setBrand(['Raymond','Puma','GUCCI','Nike','Hermes','Cartier','Levis','Adidas','Burberry'])
  //       break;
  //     }
  //     case "car": {
  //       setBrand(['Toyota','Tesla','Kia','Honda','Hyundai','Porche','Jeep','Ford','buick'])
  //       break;
  //     }
  //     default:
  //       return state;
  //   }
  // },[state.adPost.categories]);
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
    const filteredData = options.filter((item) =>
      item.slug.includes(inputValue)
    );
    callback(filteredData);
  };

  return (
    <>
      <Grid
        flexBox
        style={{
          paddingTop: "10px",
        }}
      >
        {postSegments &&
          console.log(JSON.stringify(postSegments, null, 2), "\n")}

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
          <Col xs={8} sm={8}>
            <Heading
              as="h1"
              content="Post Ads"
              textAlign="left"
              mb={10}
              style={{ fontSize: 24, fontWeight: 600, color: "#333333" }}
            />
          </Col>
          <Col xs={4} sm={4}>
            <TopToolBar
              onClose={() => {
                props.data.closeModal();
              }}
            />
            {/* <Progress
              color="#30c56d"
              progress={(1 / 4) * step}
              height={4}
              style={{ marginBottom: "40px" }}
            /> */}
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
          {console.log("on selection ->", state.adPost.categories)}

          {state.adPost.categories.sections &&
            state.adPost.categories.sections.length > 0 &&
            state.adPost.categories.sections.map((section, index) => {
              console.log("section ->", section);
              switch (section.type) {
                case "radioSelectionList":
                  return <RadioListSection section={section} />;
              }
            })}
        </Row>

        {/* <Row>
          <Col xs={12} sm={7} md={7}>
            <AdImagesInfo />
          </Col>
          <Col xs={12} sm={5} md={5} style={{ marginBottom: 50 }}>
            <TitleAndPriceInfo />
            {adPostSteps[step] &&
              adPostSteps[step] === STEPS.STEP_SET_TITLE_AND_PRICE && (
                <TitleAndPriceInfo />
              )}
            {adPostSteps[step] &&
              adPostSteps[step] === STEPS.STEP_SET_LOCATION && <LocationInfo />}
            {adPostSteps[step] &&
              adPostSteps[step] === STEPS.STEP_SET_CATEGORY_AND_TAGS && (
                <CategoryAndDetailInfo />
              )}
            {adPostSteps[step] &&
              adPostSteps[step] === STEPS.STEP_SET_CONTACT_NUMBER && (
                <ContactNumberInfo userId={userId} />
              )}
          </Col>
        </Row> */}
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
