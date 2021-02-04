import React, { useState, useContext, useEffect } from "react";
import Icon from "react-icons-kit";
import { archive } from "react-icons-kit/ionicons/archive";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";
import { chevronLeft } from "react-icons-kit/ionicons/chevronLeft";
import { uploadMultipleImages } from "../../../helpers/uploadMultipleImage";
import Box from "reusecore/src/elements/Box";
import Button from "reusecore/src/elements/Button";
import Text from "reusecore/src/elements/Text";
import LocationSearchInput from "../../../components/InputGooglePlace/altered";
import { ADD_POST } from "core/graphql/Mutations";
import { useMutation } from "@apollo/react-hooks";
import AuthHelper from "../../../helpers/authHelper";
import { AddPostContext } from "../../../contexts/AddPostContext";

let imagesUrl = [];

export default () => {
  const { state, dispatch } = useContext(AddPostContext);
  const { step, adPost } = state;
  const [btnLoading, setBtnLoading] = useState(false);
  const [postMutation, { data }] = useMutation(ADD_POST);

  const handleLocation = (latlng, selected) => {
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
    dispatch({
      type: "UPDATE_ADPOST",
      payload: { key: "location", value: location },
    });
  };

  const handleAddress = () => {};

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

  let latlng = {
    latitude: 22.5104166,
    longitude: 88.37109750000002,
  };

  if (adPost.location != null) {
    latlng = {
      latitude: adPost.location.lat,
      longitude: adPost.location.lng,
    };
  }
  const markerDrag = async (marker) => {
    var geocoder = new google.maps.Geocoder();
    latlng = {
      lat: Number(marker.latLng.lat().toFixed(4)),
      lng: Number(marker.latLng.lng().toFixed(4)),
    };
    geocoder.geocode({ latLng: latlng }, function(results, status) {
      if (results[0] && results[0].formatted_address) {
        const location = {
          lat: latlng.lat,
          lng: latlng.lng,
          formattedAddress: results[0].formatted_address,
        };
        dispatch({
          type: "UPDATE_ADPOST",
          payload: { key: "location", value: location },
        });
      }
    });
  };
  const handleChange = (address) => {
    dispatch({
      type: "UPDATE_ADPOST",
      payload: {
        key: "location",
        value: { ...adPost.location, formattedAddress: address },
      },
    });
  };
  return (
    <>
      <LocationSearchInput
        title={"City"}
        address={
          adPost.location && adPost.location.formattedAddress
            ? adPost.location.formattedAddress
            : ""
        }
        handleChange={handleChange}
        handleAddress={handleAddress}
        handleLocation={handleLocation}
      />
    </>
  );
};
