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
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { ADD_POST } from "core/graphql/Mutations";
import { useMutation } from "@apollo/react-hooks";
import AuthHelper from "../../../helpers/authHelper";
import { AddPostContext } from "../../../contexts/AddPostContext";

const MapView = withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={13}
      center={{
        lat: props.location.latitude,
        lng: props.location.longitude,
      }}
    >
      <Marker
        position={{
          lat: props.location.latitude,
          lng: props.location.longitude,
        }}
        draggable={true}
        onDragEnd={props.markerDrag}
      />
    </GoogleMap>
  );
});

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

  useEffect(() => {
    (async function() {
      if (imagesUrl.length) {
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
    })();
  }, [prossedAdPostData.gallery]);

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
      <Text
        content="Enter your location"
        pb={20}
        style={{ fontSize: 16, fontWeight: 400, color: "#595959" }}
      />
      <LocationSearchInput
        address={
          adPost.location && adPost.location.formattedAddress
            ? adPost.location.formattedAddress
            : ""
        }
        handleChange={handleChange}
        handleAddress={handleAddress}
        handleLocation={handleLocation}
      />
      <MapView
        containerElement={<div style={{ height: `195px`, marginTop: "8px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={latlng}
        markerDrag={(marker) => markerDrag(marker)}
      />

      <Box flexBox justifyContent="space-between" mt={40}>
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
        <Button
          title="Next"
          iconPosition="right"
          disabled={adPost.location == null || btnLoading}
          onClick={() =>
            dispatch({
              type: "UPDATE_STEP",
              payload: { step: step + 1 },
            })
          }
          icon={<Icon icon={chevronRight} size={21} color="#ffffff" />}
          style={{
            backgroundColor:
              adPost.location == null || btnLoading ? "#e2e2e2" : "#30C56D",
          }}
        />
      </Box>
    </>
  );
};
