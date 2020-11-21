import React, { useState } from 'react';
import * as Yup from 'yup';
import Input from '../../../components/Input';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import { withFormik } from 'formik';
import AuthHelper from '../../../helpers/authHelper';
import Box from 'reusecore/src/elements/Box';
import { FormGroup, ErrorNotification } from '../../SignInForm/style';

const ResetPassEnhancer = withFormik({
  mapPropsToValues: props => ({
    currentPass: '',
    newPass: '',
    confirmPass: '',
  }),
  validationSchema: Yup.object().shape({
    currentPass: Yup.string().required('Current Password is required!'),
    newPass: Yup.string().required('New Password is required'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('newPass'), null], "Password don't match")
      .required('Password Confirm is required'),
  }),
});

const ResetPass = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
}) => {
  const [message, setMessage] = useState('');
  const [isSubmitted, setIssubmit] = useState(false);
  handleSubmit = async () => {
    setIssubmit(true);
    if (Object.keys(errors).length !== 0) {
      return;
    }
    const hasPasswordReset = await AuthHelper.changePassword(
      values.currentPass,
      values.newPass
    );
    if (hasPasswordReset && !hasPasswordReset.error) {
      setMessage('Password Reset Successful!');
    } else if (hasPasswordReset.error) {
      setMessage(hasPasswordReset.error.message);
    }
  };
  return (
    <>
      <Heading
        as="h3"
        content="Password Setting"
        pb={32}
        fontSize={18}
        color="#333333"
        fontWeight={600}
      />

      <FormGroup className={errors.currentPass ? 'hasErrorMsg' : ''}>
        <Input
          elementType="input"
          elementConfig={{
            type: 'password',
            required: 'required',
          }}
          onBlur={handleBlur('currentPass')}
          label="Current Password"
          changed={handleChange('currentPass')}
          secureTextEntry={true}
          value={values.currentPass}
          error={errors.currentPass}
          touched={touched}
        />
        <span className="errorMsg">
          {(errors.currentPass && touched.currentPass) ||
          (isSubmitted && errors.currentPass)
            ? errors.currentPass
            : null}
        </span>
      </FormGroup>

      <FormGroup className={errors.newPass ? 'hasErrorMsg' : ''}>
        <Input
          elementType="input"
          elementConfig={{
            type: 'password',
            required: 'required',
          }}
          label="New Password"
          changed={handleChange('newPass')}
          secureTextEntry={true}
          onBlur={handleBlur('newPass')}
          value={values.newPass}
          secureTextEntry={true}
          error={errors.newPass}
          touched={touched}
        />
        <span className="errorMsg">
          {(errors.newPass && touched.newPass) ||
          (isSubmitted && errors.newPass)
            ? errors.newPass
            : null}
        </span>
      </FormGroup>

      <FormGroup className={errors.confirmPass ? 'hasErrorMsg' : ''}>
        <Input
          elementType="input"
          elementConfig={{
            type: 'password',
            required: 'required',
          }}
          label="Confirm Password"
          changed={handleChange('confirmPass')}
          onBlur={handleBlur('confirmPass')}
          secureTextEntry={true}
          value={values.confirmPass}
          secureTextEntry={true}
          error={errors.confirmPass}
          touched={touched}
        />
        <span className="errorMsg">
          {(errors.confirmPass && touched.confirmPass) ||
          (isSubmitted && errors.confirmPass)
            ? errors.confirmPass
            : null}
        </span>
      </FormGroup>

      {/* <p style={{ color: '#EF5A5A', textAlign: 'center' }}>
        {message ? message : ''}
      </p> */}

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
        onClick={handleSubmit}
        // disabled={Object.keys(errors).length !== 0}
        title="Save Changes"
        bg="#30C56D"
        color="#ffffff"
        width={1}
        mt={10}
      />
    </>
  );
};

export default ResetPassEnhancer(ResetPass);
