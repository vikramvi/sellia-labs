import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { withFormik } from 'formik';
import Button from 'reusecore/src/elements/Button';
import { ErrorNotification } from '../SignInForm/style';
import Input from '../../components/Input';
import { setFirebaseCookie } from '../../helpers/session';
import redirect from '../../helpers/redirect';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER } from 'core/graphql/Mutations';
import {
  GET_VERIFICATION_CODE,
  VERIFY_CODE,
  UPDATE_AUTHOR,
} from 'core/graphql/Mutations';
import AuthHelper from '../../helpers/authHelper';

const MobileNumbersEnhancer = withFormik({
  mapPropsToValues: props => {
    const number = '';
    const code = '';
    return {
      number,
      code,
    };
  },
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

const MobileSignIn = ({
  values,
  touched,
  handleChange,
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
    errorMessage: false,
  });

  const { confirmResult, isMobileVerified, wrongCode, errorMessage } = state;

  const handleGetVerificationCode = async () => {
    try {
      const confirmResult = await AuthHelper.login(
        'phone',
        null,
        null,
        values.number
      );
      if (!confirmResult.error) {
        setState({ ...state, confirmResult, errorMessage: false });
      } else {
        setState({ ...state, errorMessage: confirmResult.error.message });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyCode = async () => {
    let mobileNumbers = values.mobile;
    const user = await AuthHelper.confirmVerification(
      state.confirmResult,
      values.code
    );
    if (user && !user.error) {
      setState({ ...state, isMobileVerified: true, errorMessage: false });
      const token = await user.getIdToken();
      setFieldValue('token', token);
    } else if (user.error) {
      setState({
        ...state,
        errorMessage: user.error.message,
      });
    }
  };

  useEffect(() => {
    (async function() {
      try {
        if (values.token) {
          const res = await registerMutation();
          if (res && res.data && res.data.register) {
            const user = res.data.register;
            setFirebaseCookie('id_token', values.token);
            setFirebaseCookie('user', { ...user });
            redirect({}, '/');
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [values.token]);

  const registerMutation = useMutation(REGISTER, {
    variables: {
      user: { mobile: [{ number: values.number }], token: values.token },
    },
  });

  return (
    <>
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
            label="Verify & Login"
            changed={handleChange('code')}
            value={values.code}
            touched={touched}
          />
          <Button
            onClick={handleVerifyCode}
            title="Verify & Login"
            bg="#30C56D"
            color="#ffffff"
            width={1}
          />
        </>
      ) : null}
      {isMobileVerified ? (
        <p
          style={{ color: '#30C56D', textAlign: 'center', fontFamily: 'Lato' }}
        >
          Your number is verified!
        </p>
      ) : (
        ''
      )}

      {errorMessage ? (
        <ErrorNotification style={{ marginTop: 30 }}>
          {errorMessage}
        </ErrorNotification>
      ) : (
        ''
      )}
    </>
  );
};

export default MobileNumbersEnhancer(MobileSignIn);
