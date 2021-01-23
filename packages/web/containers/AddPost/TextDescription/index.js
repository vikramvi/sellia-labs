import React, { useContext, useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";
import { chevronLeft } from "react-icons-kit/ionicons/chevronLeft";
import { uploadMultipleImages } from "../../../helpers/uploadMultipleImage";
import Box from "reusecore/src/elements/Box";
import Button from "reusecore/src/elements/Button";
import Text from "reusecore/src/elements/Text";
import Dropdown from "../../../components/DropdownSelect";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_POST } from "core/graphql/Mutations";
import AuthHelper from "../../../helpers/authHelper";
import Link from "next/link";
import { ACCOUNT_SETTING_PAGE } from "core/navigation/constant";
import { AddPostContext } from "../../../contexts/AddPostContext";
import gql from "graphql-tag";
import Input from "../../../components/Input";

const GET_AUTHOR_MOBILE_NUMBER = gql`
  query GetAuthorMobile($username: ID!) {
    author(id: $username) {
      id
      mobile {
        number
      }
    }
  }
`;

let imagesUrl = [];
const TextDescription = (props) => {
  const { state, dispatch } = useContext(AddPostContext);
  const [btnLoading, setBtnLoading] = useState(false);
  const [publishBtnLoading, setPublishBtnLoading] = useState(false);
  const { step, adPost } = state;
  const [postMutation] = useMutation(ADD_POST);

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

  return (
    <>
      <Box flexBox flexDirection="column">
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
      </Box>
    </>
  );

  // return (
  //   <>
  //     <Text
  //       content="Select the mobile number you want as contact"
  //       pb={20}
  //       style={{ fontSize: 16, fontWeight: 400, color: "#595959" }}
  //     />
  //     {!mobiles.length && !loading ? (
  //       <Link href={`${ACCOUNT_SETTING_PAGE}?view=add-mobile-number`}>
  //         <Button title="Add Mobile Number Now" variant="textButton" />
  //       </Link>
  //     ) : null}
  //     {mobiles.length && !loading ? (
  //       <>
  //         <Text
  //           content="Select Your Mobile Number"
  //           style={{ fontSize: 16, fontWeight: 400, color: "#595959" }}
  //         />
  //         <Dropdown
  //           options={mobiles}
  //           value={{ label: adPost.contactNumber, value: adPost.contactNumber }}
  //           onChange={(contact, index, options) => {
  //             dispatch({
  //               type: "UPDATE_ADPOST",
  //               payload: { key: "contactNumber", value: contact.value },
  //             });
  //           }}
  //           placeholder="Contact Number"
  //           label="Contact Number"
  //         />
  //       </>
  //     ) : null}

  //     <Box flexBox justifyContent="space-between">
  //       <Button
  //         title="Previous"
  //         iconPosition="left"
  //         onClick={() =>
  //           dispatch({
  //             type: "UPDATE_STEP",
  //             payload: { step: step - 1 },
  //           })
  //         }
  //         disabled={btnLoading}
  //         icon={<Icon icon={chevronLeft} size={14} color="#8C8C8C" />}
  //         variant="textButton"
  //         mr={30}
  //         ml="auto"
  //       />
  //     </Box>
  //   </>
  // );
};

export default TextDescription;
