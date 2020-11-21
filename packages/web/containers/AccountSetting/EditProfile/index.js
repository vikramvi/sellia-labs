import React, { useState, useEffect } from 'react';
import { withFormik } from 'formik';
import Input from '../../../components/Input';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import ChangeProfilePicture from './UploadImage';
import { openModal } from '@redq/reuse-modal';
import SuccessModal from '../../../containers/ModalContainer/SuccessModal';
import Alert from 'reusecore/src/elements/Alert';

import { uploadMultipleImages } from '../../../helpers/uploadMultipleImage';
import { useMutation } from '@apollo/react-hooks';
import AuthHelper from '../../../helpers/authHelper';

import { UPDATE_AUTHOR } from 'core/graphql/Mutations';
import { GET_AUTHOR } from 'core/graphql/Author';
let imagesUrl = [];
const EditProfileEnhancher = withFormik({
  enableReinitialize: 'true',
  mapPropsToValues: props => {
    const { author, loading } = props;
    const name = !loading && author && author.name ? author.name : '';
    const website = !loading && author && author.website ? author.website : '';
    const address = !loading && author && author.address ? author.address : '';
    return {
      name,
      address,
      website,
    };
  },
  displayName: 'EditProfileForm', // helps with React DevTools
});

const EditProfile = props => {
  const [localImage, setImage] = useState(null);
  const [error, setError] = useState('');
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
  const onPreviewDrop = images => {
    setUploadRejected(false);
    images.map(image => {
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
      setFieldValue('image', imagesUrl[0][0]);
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
        if (error != '')
          openModal({
            config: {
              disableDragging: false,
              minHeight: 'auto',
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
            modalClass: 'customModal',
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

  return (
    <>
      <Heading
        as="h3"
        content="Profile Setting"
        fontSize={18}
        color="#333333"
        fontWeight={600}
      />
      {uploadRejected && (
        <Alert colors="error" mb={30}>
          <div style={{ textAlign: 'center' }}>Maximum upload size 1MB</div>
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
          type: 'text',
          required: 'required',
        }}
        label="Name"
        changed={handleChange('name')}
        value={values.name}
        error={errors.name}
        touched={touched}
      />
      <Input
        elementType="input"
        elementConfig={{
          type: 'text',
          required: 'required',
        }}
        label="Address"
        changed={handleChange('address')}
        value={values.address}
        error={errors.address}
        touched={touched}
      />
      <Input
        elementType="input"
        elementConfig={{
          type: 'text',
          required: 'required',
        }}
        label="Web"
        changed={handleChange('website')}
        value={values.website}
        error={errors.website}
        touched={touched}
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
    </>
  );
};

export default EditProfileEnhancher(EditProfile);
