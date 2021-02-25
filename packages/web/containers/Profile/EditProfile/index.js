import React, { useState, useEffect } from "react";
import { withFormik } from "formik";
import Input from "../../../components/Input";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import ChangeProfilePicture from "./UploadImage";
import { openModal } from "@redq/reuse-modal";
import SuccessModal from "../../../containers/ModalContainer/SuccessModal";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Box from "reusecore/src/elements/Box";

import Alert from "reusecore/src/elements/Alert";
import LocationSearchInput from "../../../components/InputGooglePlace/altered";

import { uploadMultipleImages } from "../../../helpers/uploadMultipleImage";
import { useMutation } from "@apollo/react-hooks";
import AuthHelper from "../../../helpers/authHelper";

import { UPDATE_AUTHOR } from "core/graphql/Mutations";
import { GET_AUTHOR } from "core/graphql/Author";
let imagesUrl = [];
const EditProfileEnhancher = withFormik({
  enableReinitialize: "true",
  mapPropsToValues: (props) => {
    const { author, loading } = props;
    const name = !loading && author && author.name ? author.name : "";
    const email = !loading && author && author.email ? author.email : "";
    const secondEmail =
      !loading && author && author.secondEmail ? author.secondEmail : "";

    const title = !loading && author && author.title ? author.title : "";
    const website = !loading && author && author.website ? author.website : "";
    const homeLocation =
      !loading && author && author.homeLocation ? author.homeLocation : {};
    const workLocation =
      !loading && author && author.workLocation ? author.workLocation : {};

    return {
      name,
      website,
      email,
      secondEmail,
      title,
      homeLocation,
      workLocation,
    };
  },
  displayName: "EditProfileForm", // helps with React DevTools
});

const EditProfile = (props) => {
  const [localImage, setImage] = useState(null);
  const [error, setError] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [uploadRejected, setUploadRejected] = useState(false);
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    loading,
    author,
  } = props;

  useEffect(() => {
    (async function() {
      if (values.image) {
        try {
          await addAuthor({
            variables: {
              author: {
                ...author,
                ...values,
              },
            },
          });

          setBtnLoading(false);
        } catch (error) {
          setError(error.graphQLErrors[0].message);
          setBtnLoading(false);
        }
      }
    })();
  }, [values.image]);
  const onPreviewDrop = (images) => {
    setUploadRejected(false);
    images.map((image) => {
      image.preview = URL.createObjectURL(image);
    });
    if (images.length) {
      setImage(images[0]);
    }
  };
  const onDropRejected = () => {
    setUploadRejected(true);
  };
  let avatar;
  if (!loading && author && author.image && author.image.largeUrl) {
    avatar = { preview: author.image.largeUrl };
  }
  if (localImage !== null) {
    avatar = localImage;
  }
  const handlesSubmit = async () => {
    setBtnLoading(true);
    await AuthHelper.refreshToken();

    if (localImage) {
      imagesUrl = await uploadMultipleImages([localImage]);
      setFieldValue("image", imagesUrl[0][0]);
    } else {
      try {
        await addAuthor({
          variables: {
            author: {
              ...author,
              ...values,
            },
          },
        });
        setBtnLoading(false);
        if (error != "")
          openModal({
            config: {
              disableDragging: false,
              minHeight: "auto",
              size: {
                width: 350,
                height: 260,
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
            modalClass: "customModal",
            closeOnClickOutside: true,
            component: SuccessModal,
          });
      } catch (error) {
        setBtnLoading(false);
        setError(error.graphQLErrors[0].message);
      }
    }
  };
  const [addAuthor] = useMutation(UPDATE_AUTHOR);

  const handleAddress = (latlng, selected) => {
    let locationObject = {
      lat: false,
      lng: false,
      formattedAddress: "",
    };
    const location = {
      ...locationObject,
      lat: latlng.lat,
      lng: latlng.lng,
      formattedAddress: selected,
    };
  };

  const handleWorkLocation = (latlng, selected) => {
    let locationObject = {
      lat: false,
      lng: false,
      formattedAddress: "",
    };
    const location = {
      ...locationObject,
      lat: latlng.lat,
      lng: latlng.lng,
      formattedAddress: selected,
    };

    setFieldValue("workLocation", location);
  };

  const handleHomeLocation = (latlng, selected) => {
    let locationObject = {
      lat: false,
      lng: false,
      formattedAddress: "",
    };
    const location = {
      ...locationObject,
      lat: latlng.lat,
      lng: latlng.lng,
      formattedAddress: selected,
    };

    setFieldValue("homeLocation", location);
  };

  return (
    <Box style={{ width: "100%" }} flexDirection="column">
      {uploadRejected && (
        <Alert colors="error" mb={30}>
          <div style={{ textAlign: "center" }}>Maximum upload size 1MB</div>
        </Alert>
      )}
      <ChangeProfilePicture
        onPreviewDrop={onPreviewDrop}
        proPic={avatar}
        maxSize={1024000}
        onDropRejected={onDropRejected}
      />
      <Input
        elementType="input"
        elementConfig={{
          type: "text",
          required: "required",
        }}
        label="Name"
        changed={handleChange("name")}
        value={values.name}
        error={errors.name}
        touched={touched}
      />

      <Input
        elementType="input"
        elementConfig={{
          type: "text",
          required: "required",
        }}
        label="Professional Title"
        changed={handleChange("title")}
        value={values.title}
        error={errors.title}
        touched={touched}
      />

      <Input
        elementType="input"
        elementConfig={{
          type: "text",
          required: "required",
          readOnly: true,
        }}
        label="Email"
        value={values.email}
        error={errors.email}
        touched={touched}
      />

      <Input
        elementType="input"
        elementConfig={{
          type: "text",
          required: "required",
        }}
        label="Secondary email"
        changed={handleChange("secondEmail")}
        value={values.secondEmail}
        error={errors.secondEmail}
        touched={touched}
      />

      <LocationSearchInput
        title={"Work location"}
        address={values.workLocation && values.workLocation.formattedAddress}
        handleChange={(address) => {
          setFieldValue("workLocation", {
            ...values.workLocation,
            formattedAddress: address,
          });
        }}
        handleAddress={handleAddress}
        handleLocation={handleWorkLocation}
      />

      <LocationSearchInput
        title={"Home location"}
        address={values.homeLocation && values.homeLocation.formattedAddress}
        handleChange={(address) => {
          setFieldValue("homeLocation", {
            ...values.homeLocation,
            formattedAddress: address,
          });
        }}
        handleAddress={handleAddress}
        handleLocation={handleHomeLocation}
      />

      <Button
        onClick={handlesSubmit}
        title="Save Changes"
        bg="#30C56D"
        color="#ffffff"
        mt={10}
        width={1}
        isLoading={btnLoading}
        loaderColor="#ffffff"
        iconPosition="left"
      />
    </Box>
  );
};

export default EditProfileEnhancher(EditProfile);
