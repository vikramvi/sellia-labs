import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-icons-kit';
import { locked } from 'react-icons-kit/iconic/locked';
import { phone } from 'react-icons-kit/iconic/phone';

import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';
import AuthHeader from '../../components/AuthHeader';
import Input from '../../components/Input';
import Box from 'reusecore/src/elements/Box';
import { FormGroup, ErrorNotification } from '../SignInForm/style';
import { REGISTER } from 'core/graphql/Mutations';
import { useMutation } from '@apollo/react-hooks';
import AuthHelper from '../../helpers/authHelper';
import { setFirebaseCookie } from '../../helpers/session';
import redirect from '../../helpers/redirect';

const SignupEnhancher = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string().required('Password is required'),
  }),
});
let token = '';
const SignUpForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
  setFieldValue,
}) => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [registerMutation, { data }] = useMutation(REGISTER);
  handleSubmit = async () => {
    setLoading(true);
    if (!Object.keys(errors).length) {
      const { email, password } = values;
      const provider = 'password';
      const { user, error } = await AuthHelper.signUp(
        provider,
        email,
        password
      );
      if (user) {
        token = await user.getIdToken();
        setFieldValue('token', token);
      } else if (error) {
        setLoading(false);
        setError(error);
      }
    }
  };
  useEffect(() => {
    (async function() {
      try {
        if (values.token) {
          const res = await registerMutation({
            variables: { user: { email: values.email, token: values.token } },
          });
          if (res && res.data && res.data.register) {
            setLoading(false);
            const user = res.data.register;
            setFirebaseCookie('id_token', token);
            setFirebaseCookie('user', { ...user });
            redirect({}, '/');
          }
        }
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [values.token]);
  return (
    <>
      {/* auth page header section */}
      <AuthHeader />

      {/* signup form */}
      <FormGroup className={errors.email ? 'hasErrorMsg' : ''}>
        <Input
          elementType="input"
          elementConfig={{
            type: 'email',
            required: 'required',
          }}
          value={values.email}
          error={errors.email}
          touched={touched}
          label="Email"
          onBlur={handleBlur('email')}
          changed={handleChange('email')}
          highlightColor="#f09"
        />
        <span className="errorMsg">
          {errors.email && touched.email && errors.email}
        </span>
      </FormGroup>

      <FormGroup className={errors.password ? 'hasErrorMsg' : ''}>
        <Input
          elementType="input"
          elementConfig={{
            type: 'password',
            required: 'required',
          }}
          value={values.password}
          error={errors.password}
          onBlur={handleBlur('password')}
          touched={touched}
          label="Password"
          changed={handleChange('password')}
        />
        <span className="errorMsg">
          {errors.password && touched.password && errors.password}
        </span>
      </FormGroup>

      {error.message ? (
        <Box
          flexBox
          mt={20}
          mb={15}
          justifyContent="center"
          alignItems="center"
        >
          <ErrorNotification>{error.message}</ErrorNotification>
        </Box>
      ) : (
        ''
      )}

      <Button
        onClick={handleSubmit}
        title="Sign up now"
        width={1}
        isLoading={loading}
        loaderColor="#fff"
        icon={<Icon icon={locked} size={21} />}
        mt={20}
      />

      {/* <Text
        fontSize={14}
        content="Or"
        color="#8C8C8C"
        textAlign="center"
        mt={16}
      /> */}

      {/* <Button
        onClick={handleSubmit}
        title="Sign up with"
        icon={<Icon icon={phone} size={21} />}
        width={1}
        bg="#5CABE6"
      /> */}

      {/* signin page redirection section */}

      <Box flexBox mt={20} justifyContent="center" alignItems="center">
        <Text content=" Have an account ?" color="#8C8C8C" mb="0" />

        <Button
          title="Sign In"
          variant="textButton"
          ml="5px"
          onClick={() => Router.push('/signin')}
        />
      </Box>
    </>
  );
};

export default SignupEnhancher(SignUpForm);
