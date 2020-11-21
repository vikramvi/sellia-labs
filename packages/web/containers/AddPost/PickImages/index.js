import React, { useContext, useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';

import AuthHelper from '../../../helpers/authHelper';
import { ADD_POST } from 'core/graphql/Mutations';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Box from 'reusecore/src/elements/Box';
import Alert from 'reusecore/src/elements/Alert';
import DropArea from '../../../components/DropArea';
import { AddPostContext } from '../../../contexts/AddPostContext';
import { uploadMultipleImages } from '../../../helpers/uploadMultipleImage';
import LoadingIndicator from '../../../components/LoadingIndicator';

let imagesUrl = [];
const PickImages = ({ userId }) => {
  const [uploadLoader, ToggleLoader] = useState(false);
  const [uploadRejected, setUploadRejected] = useState(false);
  const { state, dispatch } = useContext(AddPostContext);
  const { step, adPost } = state;
  const authorId = userId;
  const [postMutation, { data }] = useMutation(ADD_POST);

  const onPreviewDrop = async selectedImages => {
    setUploadRejected(false);
    if (selectedImages.length) {
      ToggleLoader(true);
      await AuthHelper.refreshToken();
      imagesUrl = await uploadMultipleImages(selectedImages);
      if (imagesUrl && imagesUrl.length > 0) {
        dispatch({
          type: 'UPDATE_FULL_ADPOST',
          payload: {
            gallery: adPost.gallery.concat(imagesUrl[0]),
            image: !adPost.image.url ? imagesUrl[0][0] : adPost.image,
            authorId: authorId,
            slug: new Date(),
          },
        });
      }

      dispatch({ type: 'UPDATE_STEP', payload: { step: step + 1 } });
    }
  };
  const {
    preImage,
    preGallery,
    localImage,
    localGallery,
    ...prossedAdPostData
  } = adPost;
  useEffect(() => {
    (async function() {
      if (imagesUrl.length) {
        try {
          const data = await postMutation({
            variables: {
              post: prossedAdPostData,
            },
          });
          ToggleLoader(false);
          if (!adPost.id) {
            dispatch({
              type: 'UPDATE_ADPOST',
              payload: { key: 'id', value: data.data.addPost.id },
            });
          }
        } catch (error) {
          ToggleLoader(false);
        }
      }
    })();
  }, [prossedAdPostData.gallery]);
  const onDropRejected = () => {
    ToggleLoader(false);
    setUploadRejected(true);
  };
  return (
    <Box
      flexBox
      height="100%"
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: 'inherit',
      }}
    >
      <Box width="305px">
        <Heading
          as="h1"
          content="Post Ads"
          textAlign="center"
          mb={40}
          style={{ fontSize: 24, fontWeight: 600, color: '#333333' }}
        />
        {uploadLoader && <LoadingIndicator />}
        {uploadRejected && (
          <Alert colors="error" mb={30}>
            <div style={{ textAlign: 'center' }}>Maximum upload size 1MB</div>
          </Alert>
        )}
        <Dropzone
          onDrop={onPreviewDrop}
          maxSize={1024000}
          onDropRejected={onDropRejected}
        >
          {({ getRootProps, getInputProps }) => {
            return (
              <div {...getRootProps()} style={{ outline: 0 }}>
                <input {...getInputProps()} />
                <DropArea />
              </div>
            );
          }}
        </Dropzone>

        <Text
          content="World’s largest free buy and selling advertising platform ."
          textAlign="center"
          lineHeight="22px"
          style={{ fontSize: 16, fontWeight: 400, color: '#595959' }}
        />
      </Box>
    </Box>
  );
};

export default PickImages;
