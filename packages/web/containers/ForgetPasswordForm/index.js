import React, { useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router';
import AuthHeader from '../../components/AuthHeader';
import Button from 'reusecore/src/elements/Button';
import Box from 'reusecore/src/elements/Box';
import { FormGroup, ErrorNotification } from '../SignInForm/style';
import Input from '../../components/Input';
import AuthHelper from '../../helpers/authHelper';

const ForgetPasswordEnhancer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({ email: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
});

const ForgetPasswordForm = ({
  values,
  handleChange,
  touched,
  errors,
  handleSubmit,
  handleBlur,
}) => {
  const [message, setMessage] = useState('');
  handleSubmit = async () => {
    const hasPasswordReset = await AuthHelper.forgetPass(values.email);
    if (hasPasswordReset && !hasPasswordReset.error) {
      setMessage('Email Sent Successfully');
    } else if (hasPasswordReset.error) {
      setMessage(hasPasswordReset.error.message);
    }
  };
  return (
    <>
      {/* auth page header section */}
      <AuthHeader
        title={{
          content: 'Forget Your Password?',
        }}
      />

      {/* <p>{message ? message : ''}</p> */}

      {/* forgetPassword form */}
      <FormGroup className={errors.email ? 'hasErrorMsg' : ''}>
        <Input
          elementType="input"
          elementConfig={{
            type: 'email',
            required: 'required',
          }}
          onBlur={handleBlur('email')}
          value={values.email}
          error={errors.email}
          touched={touched}
          label="Email Address"
          changed={handleChange('email')}
        />
        {/* {errors.email && touched.email && <span>{errors.email}</span>} */}
        <span className="errorMsg">
          {errors.email && touched.email && errors.email}
        </span>
      </FormGroup>

      {message ? (
        <Box
          flexBox
          mt={20}
          mb={15}
          justifyContent="center"
          alignItems="center"
        >
          <ErrorNotification>{message}</ErrorNotification>
        </Box>
      ) : (
        ''
      )}

      <Button
        disabled={Object.keys(errors).length !== 0}
        onClick={handleSubmit}
        title="Submit"
        width={1}
        mt={10}
      />

      {/* signin page redirection section */}
      <Button
        title="Not Now"
        color="#8C8C8C"
        variant="textButton"
        width={1}
        onClick={() => Router.push('/signin')}
      />
    </>
  );
};

export default ForgetPasswordEnhancer(ForgetPasswordForm);
