import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { withFormik } from 'formik';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from '../../../components/Input';

import MobileNumberList from './MobileNumberList';
import { useMutation } from '@apollo/react-hooks';
import {
  GET_VERIFICATION_CODE,
  VERIFY_CODE,
  UPDATE_AUTHOR,
} from 'core/graphql/Mutations';
import AuthHelper from '../../../helpers/authHelper';

const MobileNumbersEnhancer = withFormik({
  mapPropsToValues: props => {
    const { author, loading } = props;
    const mobile =
      !loading && author && author.mobile && author.mobile.length
        ? author.mobile
        : [];
    const number = '';
    const code = '';
    return {
      mobile,
      number,
      code,
    };
  },
  handleSubmit: (values, { props, setSubmitting }) => {},
});

const Recaptcha = () => {
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha');

    window.recaptchaVerifier.render().then(function(widgetId) {
      window.recaptchaWidgetId = widgetId;
    });
  }, []);
  return <div id="recaptcha" />;
};

const AddMobileNumber = ({
  values,
  touched,
  handleChange,
  handleSubmit,
  userInfo,
  showModal,
  author,
  setFieldValue,
  loading,
}) => {
  const [state, setState] = useState({
    confirmResult: false,
    isMobileVerified: false,
    wrongCode: false,
  });
  const [handleAuthorMutation, { data }] = useMutation(UPDATE_AUTHOR);
  const { confirmResult, isMobileVerified, wrongCode } = state;
  const HandleStoringMobileNumber = async () => {
    await AuthHelper.refreshToken();
    await handleAuthorMutation({
      variables: {
        author: {
          ...author,
          mobile: values.mobile,
        },
      },
    });
  };
  const handleRemove = async item => {
    await AuthHelper.refreshToken();
    let mobileNumber = values.mobile;
    const index = mobileNumber.indexOf(item);
    if (index > -1) {
      mobileNumber.splice(index, 1);
    }
    setFieldValue('mobile', mobileNumber);
    await handleAuthorMutation({
      variables: {
        author: {
          ...author,
          mobile: values.mobile,
        },
      },
    });
  };

  const handleGetVerificationCode = async () => {
    const confirmResult = await AuthHelper.login(
      'phone',
      null,
      null,
      values.number
    );
    setState({ ...state, confirmResult });
  };

  const handleVerifyCode = async () => {
    let mobileNumbers = values.mobile;
    try {
      const isVerified = await AuthHelper.confirmVerification(
        state.confirmResult,
        values.code
      );
      if (!isVerified.error) {
        setState({ ...state, isMobileVerified: true });
        mobileNumbers.push({ number: values.number });
        setFieldValue('mobile', mobileNumbers);
      } else {
        setState({ ...state, wrongCode: true });
      }
    } catch (error) {
      console.error(error);
      setState({ ...state, wrongCode: true });
    }
  };

  return (
    <>
      <Heading
        as="h3"
        content="Mobile Number Settings"
        fontSize={18}
        color="#333333"
        fontWeight={600}
        mb={30}
      />
      {values.mobile && (
        <MobileNumberList
          items={values.mobile}
          handleRemoveMobile={item => handleRemove(item)}
        />
      )}

      {!confirmResult ? (
        <>
          <Input
            elementType="input"
            elementConfig={{
              type: 'text',
              required: 'required',
            }}
            label="Enter Number(ex. +30*********)"
            changed={handleChange('number')}
            value={values.number}
            touched={touched}
          />

          <Recaptcha />

          <Button
            onClick={handleGetVerificationCode}
            title="Send Verification Code"
            bg="#30C56D"
            color="#ffffff"
            mt={30}
            width={1}
          />
        </>
      ) : null}
      {!isMobileVerified && confirmResult ? (
        <>
          <Input
            elementType="input"
            elementConfig={{
              type: 'text',
              required: 'required',
            }}
            label="Verify Code"
            changed={handleChange('code')}
            value={values.code}
            touched={touched}
          />
          <Button
            onClick={handleVerifyCode}
            title="Verify Code"
            bg="#30C56D"
            color="#ffffff"
            width={1}
          />
        </>
      ) : null}
      {isMobileVerified ? (
        <>
          <p style={{ color: '#30C56D', textAlign: 'center' }}>
            Your number is verified!
          </p>
          <Button
            onClick={HandleStoringMobileNumber}
            title="Save Mobile Number"
            bg="#30C56D"
            color="#ffffff"
            mt={30}
            width={1}
          />
        </>
      ) : (
        ''
      )}
      {!isMobileVerified && wrongCode ? (
        <p style={{ color: '#EF5A5A', textAlign: 'center' }}>Invalid code!</p>
      ) : (
        ''
      )}
    </>
  );
};

export default MobileNumbersEnhancer(AddMobileNumber);
